import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from "../utils/db.js"
import { generateCodeForEmail } from '../utils/generateCodeForEmail.js';
import { sendEmail } from '../utils/mail.js'
import { generatePassword } from '../utils/generatePassword.js';
import { verifyGoogleToken } from '../utils/googleAuth.js';
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  if ([email, password, name, role].some((filed) => filed?.trim() === "")) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  try {
    const existingUser = await db.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already in use"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    let finalRole = role
    if (email === process.env.ADMIN_EMAIL) {
      finalRole = "ADMIN"
    }

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: finalRole || "USER"
      }
    })

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    const emailSubject = "Welcome to Roomora - Your account created successfully";
    await sendEmail({
      name: newUser.name,
      email: newUser.email,
      subject: emailSubject
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    })

  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: error?.message || "Internal server error"
    });
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body
  if ([email, password].some((field) => field?.trim() === "")) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  try {
    const user = await db.user.findUnique({
      where: { email }
    })

    if (!user || user.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatarUrl: user.avatarUrl
      }
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      success: false,
      message: error?.message || "Internal server error"
    });
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = await db.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatarUrl: true
      }
    })

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    console.error("Error fetching current user:", error);
    res.status(500).json({
      success: false,
      message: error?.message || "Internal server error"
    });
  }
}

export const SendOtpForgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const code = generateCodeForEmail();

    await db.user.update({
      where: { email },
      data: {
        forgotPasswordOtp: code,
        forgotPasswordOtpExpiry: new Date(Date.now() + 15 * 60 * 1000),
      },
    });

    await sendEmail({
      name: user.name,
      email,
      code,
      subject: "Reset Your Password"
    });

    return res.status(200).json({
      success: true,
      message: "Password reset code sent to your email",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, message: error?.message || "Internal server error" });
  }
};

export const verifyOtp = async (req, res) => {
  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({
      success: false,
      message: "Email and code are required",
    });
  }

  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    if (user.forgotPasswordOtp !== code) {
      return res.status(400).json({
        success: false,
        message: "Invalid code",
      });
    }

    if (user.forgotPasswordOtpExpiry < new Date()) {
      return res.status(400).json({
        success: false,
        message: "Code expired",
      });
    }

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({ success: false, message: "Error verifying OTP" });
  }
};

export const changePassword = async (req, res) => {
  const { newPassword, confirmPassword, email } = req.body;

  if (!email || !newPassword || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.user.update({
      where: {
        email,
      },
      data: {
        password: hashedPassword,
        forgotPasswordOtp: null,
        forgotPasswordOtpExpiry: null,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({
      success: false,
      message: "Error changing password",
    });
  }
};

export const googleRegister = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ success: false, message: 'Token is required' });
    }

    const payload = await verifyGoogleToken(token);
    const { email, name, picture, sub } = payload;

    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email already registered. Please login instead.',
      });
    }

    const randomPassword = generatePassword();
    const hashedPassword = await bcrypt.hash(randomPassword, 10);
    let role = 'USER';
    if (email === process.env.ADMIN_EMAIL) {
      role = 'ADMIN';
    }

    const newUser = await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        avatarUrl: picture,
        role: role,
        provider: 'GOOGLE',
      },
    });

    const jwtToken = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.cookie('token', jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 604800000,
    });

    const emailSubject = "Welcome to Roomora - Your Account Details";
    await sendEmail({
      name,
      email,
      password: randomPassword,
      subject: emailSubject
    });

    return res.status(201).json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        avatarUrl: newUser.avatarUrl,
      },
    });

  } catch (error) {
    console.error('Google registration error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Internal server error',
    });
  }
};

export const googleLogin = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Google token is required"
    });
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const googleEmail = payload.email;

    if (!googleEmail) {
      return res.status(400).json({
        success: false,
        message: "Email not found in Google token"
      });
    }

    const user = await db.user.findUnique({
      where: { email: googleEmail },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No account found with this Google email. Please register first."
      });
    }

    if (!user.provider) {
      return res.status(403).json({
        success: false,
        message: "This email was registered normally. Please login with password."
      });
    }

    const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      domain: process.env.COOKIE_DOMAIN,
      path: "/",
    });

    return res.status(200).json({
      success: true,
      message: "Google login successful",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        avatarUrl: user?.avatarUrl,
      },
    });

  } catch (error) {
    console.error("Google login error:", error);
    return res.status(401).json({
      success: false,
      message: "Invalid Google token"
    });
  }
};

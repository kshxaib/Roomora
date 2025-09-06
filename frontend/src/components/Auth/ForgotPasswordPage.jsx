import React, { useState, useRef, useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, ArrowLeft, Eye, EyeOff, Clock, CheckCircle } from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [openOtpModal, setOpenOtpModal] = useState(false);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [timer, setTimer] = useState(0);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const {
    SendOtpForgotPassword,
    isSendingOtp,
    verifyOtp,
    isVerifyingOtp,
    changePassword,
    isChangingPassword,
  } = useAuthStore();

  // Timer for OTP expiration
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && openOtpModal) {
      setResendEnabled(true);
    }
    return () => clearInterval(interval);
  }, [timer, openOtpModal]);

  // Format timer to minutes and seconds
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Send OTP
  const sendOtp = async () => {
    setErrorMessage("");
    setSuccessMessage("");
    
    if (!email) {
      setErrorMessage("Please enter your email address");
      return;
    }
    
    const success = await SendOtpForgotPassword(email);
    if (success) {
      setOpenOtpModal(true);
      setTimer(900); // 15 minutes in seconds
      setResendEnabled(false);
    } else {
      setErrorMessage("Failed to send OTP. Please try again.");
    }
  };

  // Resend OTP
  const resendOtp = async () => {
    setErrorMessage("");
    const success = await SendOtpForgotPassword(email);
    if (success) {
      setTimer(900);
      setResendEnabled(false);
      setOtp(Array(6).fill(""));
      setSuccessMessage("OTP has been resent to your email");
      setTimeout(() => setSuccessMessage(""), 3000);
    } else {
      setErrorMessage("Failed to resend OTP. Please try again.");
    }
  };

  // Handle OTP input
  const handleOtpChange = (value, index) => {
    if (!/^[0-9A-Z]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    
    // Auto-submit if all fields are filled
    if (newOtp.every(digit => digit !== "") && index === 5) {
      handleVerifyOtp();
    }
  };

  // Handle backspace in OTP fields
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    setErrorMessage("");
    const otpCode = otp.join("");
    
    if (otpCode.length < 6) {
      setErrorMessage("Please enter the complete 6-digit OTP");
      return;
    }
    
    const success = await verifyOtp(email, otpCode);
    if (success) {
      setOpenOtpModal(false);
      setOpenChangePasswordModal(true);
    } else {
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  // Change Password
  const handleChangePassword = async () => {
    setErrorMessage("");
    
    if (!newPassword || !confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    
    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }
    
    const success = await changePassword({newPassword, confirmPassword, email});
    if (success) {
      setSuccessMessage("Password changed successfully! Redirecting to login...");
      setTimeout(() => {
        setOpenChangePasswordModal(false);
        navigate('/login');
      }, 2000);
    } else {
      setErrorMessage("Failed to change password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        
        
        <div className="p-6">
          {/* Back Button */}
          <button 
            onClick={() => openOtpModal || openChangePasswordModal 
              ? setOpenOtpModal(false) || setOpenChangePasswordModal(false) 
              : navigate('/login')}
            className="flex items-center text-red-600 hover:text-red-700 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Login
          </button>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              {successMessage}
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {errorMessage}
            </div>
          )}

          {/* Step 1: Enter Email */}
          {!openOtpModal && !openChangePasswordModal && (
            <div>
            
              
              <p className="text-lg font-medium text-gray-800 mb-2 text-center">
                Enter your email to reset your password
              </p>
              <p className="text-sm text-gray-500 mb-6 text-center">
                We'll send you a 6-digit verification code to your email address.
              </p>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <button
                disabled={!email || isSendingOtp}
                onClick={sendOtp}
                className="w-full py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors font-medium"
              >
                {isSendingOtp ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending OTP...
                  </span>
                ) : "Send OTP"}
              </button>
            </div>
          )}

          {/* Step 2: Verify OTP */}
          {openOtpModal && (
            <div>
              <div className="flex justify-center mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
              </div>
              
              <p className="text-lg font-medium text-gray-800 mb-2 text-center">
                Enter verification code
              </p>
              <p className="text-sm text-gray-500 mb-6 text-center">
                We've sent a 6-digit code to <span className="font-medium">{email}</span>
              </p>

              <div className="flex justify-center gap-2 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    className="w-12 h-14 text-center border border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center mb-6 text-sm">
                <Clock className="h-4 w-4 text-red-600 mr-1" />
                <span className={timer > 0 ? "text-red-600 font-medium" : "text-gray-500"}>
                  Code expires in: {formatTime(timer)}
                </span>
              </div>

              <button
                disabled={otp.join("").length < 6 || isVerifyingOtp}
                onClick={handleVerifyOtp}
                className="w-full py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors font-medium mb-4"
              >
                {isVerifyingOtp ? "Verifying..." : "Verify Code"}
              </button>

              <div className="text-center">
                <button
                  onClick={resendOtp}
                  disabled={!resendEnabled}
                  className={`text-sm ${resendEnabled ? "text-red-600 hover:text-red-700 font-medium" : "text-gray-400"}`}
                >
                  Didn't receive the code? Resend
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Change Password */}
          {openChangePasswordModal && (
            <div>
              <div className="flex justify-center mb-6">
                <div className="bg-red-100 p-3 rounded-full">
                  <Lock className="h-8 w-8 text-red-600" />
                </div>
              </div>
              
              <p className="text-lg font-medium text-gray-800 mb-2 text-center">
                Create new password
              </p>
              <p className="text-sm text-gray-500 mb-6 text-center">
                Please enter your new password below.
              </p>

              <div className="mb-4">
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter new password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Confirm new password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                disabled={!newPassword || !confirmPassword || isChangingPassword}
                onClick={handleChangePassword}
                className="w-full py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors font-medium"
              >
                {isChangingPassword ? "Updating..." : "Update Password"}
              </button>
            </div>
          )}
        </div>        
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
import { Resend } from "resend";
import { getWelcomeEmailHtml } from "../emails/getWelcomeEmailHtml.js";
import { getForgotPasswordHtml } from "../emails/getForgotPasswordHtml.js";
import { getGoogleWelcomeEmailHtml } from "../emails/getGoogleWelcomeEmailHtml.js";
import { getBookingEmailHtml } from "../emails/getBookingEmailHtml.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (options) => {
  const {
    subject,
    email,
    name = "",
    code,
    password,
    hotelName,
    checkIn,
    checkOut,
    guests,
    totalAmount,
  } = options;

  let html;

  if (subject === "Reset Your Password") {
    html = getForgotPasswordHtml(name, code);
  } else if (subject === "Welcome to Roomora - Your Account Details") {
    html = getGoogleWelcomeEmailHtml(name, password);
  } else if (subject === "Welcome to Roomora - Your account created successfully") {
    html = getWelcomeEmailHtml(name);
  } else if (subject === "Booking Created") {
    html = getBookingEmailHtml(name, hotelName, checkIn, checkOut, guests, totalAmount);
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Roomora <support@codesaga.live>",
      to: [email],
      subject,
      html,
    });

    if (error) {
      console.error("❌ Email sending error:", error);
      throw new Error(error.message || "Failed to send email");
    }

    console.log("✅ Email sent successfully:", data);
    return data;
  } catch (err) {
    console.error("❌ Unexpected email error:", err);
    throw err;
  }
};

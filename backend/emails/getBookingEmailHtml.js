export const getBookingEmailHtml = (
  name,
  hotelName,
  checkIn,
  checkOut,
  guests,
  totalAmount
) => `
  <div style="
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #ffffff;
    padding: 40px;
    max-width: 600px;
    margin: auto;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    color: #374151;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  ">
    <div style="text-align: center; margin-bottom: 30px;">
      <img src="" alt="Roomora" style="height: 50px; margin-bottom: 20px;">
      <h1 style="
        color: #16a34a;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
      ">
        ✅ Booking Confirmed!
      </h1>
      <p style="color: #6b7280; font-size: 16px;">
        Hi ${name}, your booking has been successfully created.
      </p>
    </div>

    <p style="margin-bottom: 20px; line-height: 1.6; color: #4b5563;">
      Here are your booking details:
    </p>

    <div style="
      background: #f9fafb;
      padding: 20px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      margin-bottom: 25px;
    ">
      <p style="margin: 8px 0; font-size: 16px;"><strong>🏨 Hotel:</strong> ${hotelName}</p>
      <p style="margin: 8px 0; font-size: 16px;"><strong>📅 Check-in:</strong> ${new Date(checkIn).toDateString()}</p>
      <p style="margin: 8px 0; font-size: 16px;"><strong>📅 Check-out:</strong> ${new Date(checkOut).toDateString()}</p>
      <p style="margin: 8px 0; font-size: 16px;"><strong>👥 Guests:</strong> ${guests}</p>
      <p style="margin: 8px 0; font-size: 16px;"><strong>💰 Total Amount:</strong> ₹${totalAmount}</p>
    </div>

    <p style="margin-top: 20px; font-size: 16px; color: #374151;">
      🌸 Best wishes for a pleasant stay,<br>
      <strong>The Roomora Team</strong>
    </p>

    <hr style="border: none; height: 1px; background-color: #e5e7eb; margin: 30px 0;" />

    <p style="font-size: 12px; color: #9ca3af; text-align: center;">
      © ${new Date().getFullYear()} Roomora. All rights reserved.<br>
      Need help? Contact us at 
      <a href="mailto:official.roomora@gmail.com" style="color: #3b82f6;">official.roomora@gmail.com</a>
    </p>
  </div>
`;

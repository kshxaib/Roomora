export const getWelcomeEmailHtml = (name) => `
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
        color: #2563eb;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
      ">
        🏨 Welcome to Roomora, ${name}!
      </h1>
      <p style="color: #6b7280; font-size: 16px;">
        Your perfect stay is just a click away
      </p>
    </div>

    <p style="margin-bottom: 20px; line-height: 1.6; color: #4b5563;">
      Hi ${name},<br><br>
      We're excited to welcome you to <strong style="color: #2563eb;">Roomora</strong>, where you can discover and book 
      the perfect accommodations for your next trip.
    </p>

    <div style="
      background: #f9fafb;
      padding: 20px;
      border-radius: 12px;
      border-left: 4px solid #3b82f6;
      margin: 25px 0;
    ">
      <div style="display: flex; align-items: center; margin-bottom: 12px; color: #4b5563;">
        <span style="color: #3b82f6; margin-right: 10px;">✦</span>
        <span>Discover unique hotels and accommodations worldwide</span>
      </div>
      <div style="display: flex; align-items: center; margin-bottom: 12px; color: #4b5563;">
        <span style="color: #3b82f6; margin-right: 10px;">✦</span>
        <span>Enjoy exclusive deals and discounts</span>
      </div>
      <div style="display: flex; align-items: center; margin-bottom: 12px; color: #4b5563;">
        <span style="color: #3b82f6; margin-right: 10px;">✦</span>
        <span>Easy booking and secure payments</span>
      </div>
      <div style="display: flex; align-items: center; color: #4b5563;">
        <span style="color: #3b82f6; margin-right: 10px;">✦</span>
        <span>24/7 customer support</span>
      </div>
    </div>

    <p style="margin-bottom: 5px; color: #4b5563;">Happy travels,</p>
    <p style="margin-top: 0; font-weight: 600; color: #1e40af;">
      The Roomora Team
    </p>

    <hr style="border: none; height: 1px; background-color: #e5e7eb; margin: 30px 0;" />

    <p style="font-size: 12px; color: #9ca3af; text-align: center;">
      © ${new Date().getFullYear()} Roomora. All rights reserved.<br>
      Need help? Contact us at <a href="mailto:official.roomora@gmail.com" style="color: #3b82f6;">official.roomora@gmail.com</a>
    </p>
  </div>
`;
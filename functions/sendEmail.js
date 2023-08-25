// netlify/functions/sendEmail.js

const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const formData = JSON.parse(event.body);

  const YOUR_EMAIL = process.env.YOUR_EMAIL;
  const YOUR_EMAIL_PASSWORD = process.env.YOUR_EMAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    // Configure your email service here
    service: "hotmail", // Use your email service here
    auth: {
      user: YOUR_EMAIL,
      pass: YOUR_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: formData.email,
    to: "your@email.com",
    subject: "New message from your website",
    text: formData.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};

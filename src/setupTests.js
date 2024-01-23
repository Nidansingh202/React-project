// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const nodemailer = require('nodemailer');

// Create a transport object using SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your_email@gmail.com', // Replace with your Gmail email address
    pass: 'your_password' // Replace with your Gmail password
  }
});

// Function to send a verification email
const sendVerificationEmail = (email, verificationLink) => {
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Email Verification',
    html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendVerificationEmail;

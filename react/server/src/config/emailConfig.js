const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // email của bạn
    pass: process.env.EMAIL_PASSWORD // password ứng dụng từ Google
  }
});

module.exports = transporter;
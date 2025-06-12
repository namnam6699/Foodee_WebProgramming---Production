const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD // Sửa thành EMAIL_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Tạm thời comment để tránh lỗi khi start
// transporter.verify(function(error, success) {
//     if (error) {
//         console.log('Email config error:', error);
//     } else {
//         console.log('Email server is ready to send messages');
//     }
// });

module.exports = transporter;
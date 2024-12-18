const transporter = require('../config/emailConfig');

const newsletterController = {
    subscribe: async (req, res) => {
        try {
            const { email } = req.body;

            // Template email với sticker
            const emailTemplate = `
                <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h1>Xin chào quý khách,</h1>
                    <h3>Đây là Foodee, chúc quý khách một ngày tốt lành!</h3>
                    
                    <img width="480" height="269" 
                         src="https://media.giphy.com/media/S2IfEQqgWc0AH4r6Al/giphy.gif" 
                         alt="hello" 
                         style="max-width: 100%; height: auto;">
                    
                    <p>Foodee tự hào là nhà hàng 4 sao với hơn 20 năm kinh nghiệm.<br>
                    Xin trân trọng cảm ơn sự tin tưởng của Quý khách!</p>
                    
                    <div style="margin-top: 20px;">
                        <p>Từ giờ, bạn sẽ nhận được:</p>
                        <ul>
                            <li>Thông tin về các món ăn mới</li>
                            <li>Khuyến mãi đặc biệt</li>
                            <li>Tin tức và sự kiện của nhà hàng</li>
                        </ul>
                    </div>
                    
                    <p style="margin-top: 20px;">
                        Trân trọng,<br>
                        Đội ngũ Foodee
                    </p>
                </body>
                </html>
            `;

            // Cấu hình email
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Chào mừng bạn đến với Foodee! 🎉',
                html: emailTemplate
            };

            // Gửi email
            await transporter.sendMail(mailOptions);

            res.json({
                success: true,
                message: 'Đăng ký nhận tin thành công!'
            });
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            res.status(500).json({
                success: false,
                message: 'Có lỗi xảy ra khi đăng ký'
            });
        }
    }
};

module.exports = newsletterController; 
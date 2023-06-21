const nodeMailer = require('nodemailer');

const sendMail = async (req, res) => {
    try {
        const { mail, subject, message } = req.body;
        console.log(mail);
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'mailermass7@gmail.com',
                pass: ''
            },
        });

        await transporter.sendMail({
            from: 'mailermass7@gmail.com',
            to: mail,
            subject: subject,
            text: message, 
        });

        res.status(200).json({ message: 'Mail sent successfully' });
    } catch (e) {
        console.log(e);
    }
};

module.exports = { sendMail };
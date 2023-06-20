const nodeMailer = require('nodemailer');

const sendMail = async (req, res) => {
    try {
        const { mail } = req.body;
        console.log(mail);
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: '',
                pass: ''
            },
        });

        await transporter.sendMail({
            from: '',
            to: '',
            subject: 'Test',
            text: 'Test',
            html: '<b>Test</b>'
        });

        res.status(200).json({ message: 'Mail sent successfully' });
    } catch (e) {
        console.log(e);
    }
};

module.exports = { sendMail };
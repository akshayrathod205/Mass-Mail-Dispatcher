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
                user: 'kr.akshay234@gmail.com',
                pass: 'ncbozhbshvwzishj'
            },
        });

        await transporter.sendMail({
            from: 'kr.akshay234@gmail.com',
            to: mail,
            subject: 'Test',
            text: 'Test'
        });

        res.status(200).json({ message: 'Mail sent successfully' });
    } catch (e) {
        console.log(e);
    }
};

module.exports = { sendMail };
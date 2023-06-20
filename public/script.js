var nodeMailer = require("nodemailer");
const sendBtn = document.getElementById("send-btn");
// const subectInput = document.getElementById("subject");
// const messageInput = document.getElementById("message");

// write a fuction to send email to all valid emails
sendBtn.addEventListener("click", async () => {
    const transporter = nodeMailer.createTransport({
        host: "gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "",
            pass: ""
        }
    });

    const info = await transporter.sendMail({
        from : "",
        to: "",
        subject: 'Mass Mailer',
        text: 'Testing the mass mailer'
    });

    console.log("Message sent: " + info.messageId);
}).catch(err => console.log(err));
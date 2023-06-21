const express = require('express');
const app = express();
const cors = require('cors');
const mailRouter = require('./routes/mail.js');

// app.use(express.static('public'));
app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use('/api/v1/mail', mailRouter)

const port = 3002;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    }
    catch (e) {
        console.log(e);
    }
}

start();
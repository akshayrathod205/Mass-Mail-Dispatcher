const express = require('express');
const app = express();

app.use(express.static('./src'));
app.use(express.json());

const port = 5000;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    }
    catch (e) {
        console.log(e);
    }
}

start();
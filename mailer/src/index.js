const express = require("express");

const { host, port, db } = require("./configuration");

const app = express();
const startServer = () => {
    app.listen(port, () => {
        console.log("Started mailer service on port: ", host, db)
    })
}

app.get('/api/get-mail', (req, res) => {
    res.json({
        id: '1234',
        email: 'test@example.com',
        message: 'П лох'
    });
});

startServer()
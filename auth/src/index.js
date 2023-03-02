const express = require("express");
const axios = require("axios");

const {connectDb} = require("./helper/db");
const {host, port, db, API_URL} = require("./configuration");

const app = express();
const startServer = () => {
    app.listen(port, () => {
        console.log("Started auth service on port: ", host, db)
    })
}
app.get('/test', (req, res) => {
    res.send("Our auth server is working correctly")
})

app.get('/testwithapidata', (req, res) => {
    axios.get(API_URL + '/testapidata')
        .then(response => {
            res.json({
                testapidata: response.data.testwithapi
            })
        })
})

app.get('/api/currentUser', (req, res) => {
    res.json({
        id: '1234',
        email: 'test@example.com'
    });
});

connectDb()
    .then(() => startServer())
    .catch((err) => console.log(err));
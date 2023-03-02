const express = require("express");

const mongoose = require("mongoose");
const axios = require("axios");

const {connectDb} = require("./helper/db");
const {host, port, db, authApiUrl, MAILER_API_URL} = require("./configuration");

const app = express();

const postSchema = new mongoose.Schema({
    name: String
})

const Post = mongoose.model("Post", postSchema);

const startServer = () => {
    app.listen(port, () => {
        console.log("Started api service", host, db)
    })

    const silence = new Post({name: "silence"});

    silence.save()
        .then((res) => console.log('saved successful', res))
        .catch((err) => console.log('save with error ', err))
}
app.get('/test', (req, res) => {
    res.send("Our api server is working correctly")
})

app.get('/api/testapidata', (req, res) => {
    res.json({
        testwithapi: true,
    });
})

app.get('/test-mailer', (req, res) => {
    axios.get(MAILER_API_URL + "/get-mail")
        .then((response) => {
            res.json({
                mail: response.data
            })
        })
        .catch(err => {
            res.json({
                err
            })
        })
})

app.get('/testwithcurrentuser', (req, res) => {
    axios.get(authApiUrl + '/currentUser')
        .then(response => {
            res.json({
                testwithcurrentuser: true,
                currentUserFromAuth: response.data
            });
        })
        .catch((err) => res.json(
            {
                error: err
            }
        ))
});

connectDb().then(() => startServer()).catch((err) => console.log(err));
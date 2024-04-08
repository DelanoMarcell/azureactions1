const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to a simple web app, for testing azure web app deployment using github actions")
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
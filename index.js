const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to a simple web app, for testing azure web app deployment using github actions")
});

const port = process.env.PORT || 3000; // Use environment port or fallback to 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});

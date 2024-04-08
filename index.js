const express = require('express');

const app = express();

app.get('/', (req, res) => {
    //send html file back
    res.sendFile(__dirname + '/file.html');
  
});

const port = process.env.PORT || 3000; // Use environment port or fallback to 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});


const express = require('express');
const app = express();
const port = 3000;
var fs = require('fs');
var elements = JSON.parse(data);



app.get('/raceJeffGordon', (req, res) => {
    const responseData = {
        message: "You're racing with Jeff Gordon!",
        
    };
    res.json(responseData);
});

const cors=require('cors');

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT
require('dotenv').config();

//INITIALIZE EXPRESS
const app=express();
//MIDDLEWARERS
app.use(bodyParser.json());

//ROUTES
app.get("/", (req, res) => {
    res.send('Hello World!');
});


//SETUP YOUR SERVER
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
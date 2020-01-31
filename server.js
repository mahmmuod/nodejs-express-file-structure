const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT
require('dotenv').config();

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

//INITIALIZE EXPRESS
const app=express();
//MIDDLEWARERS
app.use(bodyParser.json());

//MONGOOSE CONNECTION
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connection successfully!');
});


//ROUTES
app.get("/", (req, res) => {
    res.send('Hello World!');
});


//SETUP YOUR SERVER
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
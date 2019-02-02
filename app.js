const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const ejs = require('ejs');
const colors = require('colors');
require('dotenv').config();


let schema = require('./schema/schema');
let router = require('./routes/router');

// Connection with mLab
require('./connection/mLab'); 

// Init app
let app = express();


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Express Router
app.use('/', router);


// Listening
let PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server started listening at'.gray, PORT.yellow);
})
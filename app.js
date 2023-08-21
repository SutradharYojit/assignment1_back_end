const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bookRouts = require('./api/routes/products');
const aboutRouts = require('./api/routes/about');

mongoose.connect('mongodb+srv://jimmysuthar08:jimmysuthar08@learningrest.rdlntht.mongodb.net/?retryWrites=true&w=majority');
app.use('/product', bookRouts);
app.use('/about', aboutRouts);


module.exports = app;
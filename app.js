const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

const bookRouts = require('./api/routes/products');

mongoose.connect('mongodb+srv://jimmysuthar08:jimmysuthar08@learningrest.rdlntht.mongodb.net/?retryWrites=true&w=majority');
app.use(morgan('dev'));// showing that which type of request is called
app.use('/product', bookRouts);

module.exports = app;
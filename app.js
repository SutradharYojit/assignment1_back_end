const express = require('express');
const mongoose = require('mongoose');
const app = express();

const bookRouts = require('./api/routes/products');

mongoose.connect('mongodb+srv://jimmysuthar08:jimmysuthar08@learningrest.rdlntht.mongodb.net/?retryWrites=true&w=majority');
app.use('/product', bookRouts);

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
});
module.exports = app;
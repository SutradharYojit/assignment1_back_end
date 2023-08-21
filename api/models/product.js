const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    description: String,
    author: String,
    stock: Number,
});

module.exports = mongoose.model('BookData', bookSchema);



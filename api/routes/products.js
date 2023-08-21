const express = require('express');
const Products = require('../models/product');
const mongoose = require('mongoose');

const router = express();

router.get('/', (req, res, next) => {
    Products.find().select("name price description author stock").exec().then(doc => {
        console.log(doc);
        if (doc == null) {
            res.status(404).json({
                message: "No products found"
            });
        }
        else {
            res.status(200).json({
                count: doc.length,
                bookItem: doc
            });

        }
    }).catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
    const addBook = new Products({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        author: req.body.author,
        stock: req.body.stock,
    });

    addBook.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));

    res.status(201).json({
        message: "POST method from products",
        product: addBook
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Products.findById(id).
        exec().
        then(doc => {
            if (doc == null) {
                res.status(404).json({
                    message: "No Book found"
                });
            } else {
                console.log("FROM database " + doc);
                res.status(200).json(doc);
            }
        }).catch(err => console.log(err));

});

module.exports = router;
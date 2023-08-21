const express = require('express');
const Products = require('../models/product');
const mongoose = require('mongoose');

const router = express();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message:"service"
    })

    // Products.find().select("name price description author stock").exec().then(doc => {
    //     console.log(doc);
    //     if (doc == null) {
    //         res.status(404).json({
    //             message: "No products found"
    //         });
    //     }
    //     else {
    //         res.status(200).json({
    //             count: doc.length,
    //             bookItem: doc
    //         });

    //     }
    // }).catch(err => console.log(err));
});

module.exports = router;
const express = require('express');
const Products = require('../models/product');
const mongoose = require('mongoose');

const router = express();

router.get('/', (req, res, next) => {

    res.status(200).json(
        {
            "appDescription": "App is being develop using Flutter and Node.js. In this app, Implement RiverPod as StateManagement and routing implement go_route, For database integrate MongoDb.",
            "routes": [
                {
                    "name": "Home Screen",
                    "description": "In Home Page, Have 2 buttons that will take you on About Section of app and API Screen where you will get the all data of books."
                },
                {
                    "name": "API Screen",
                    "description": "In APP Screen, Get the all data of books with name, author name, price, description, stock quantity "
                }
            ],
        })
});

module.exports = router;


//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../../models/product.js');

//Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/api')


//return router
module.exports = router;

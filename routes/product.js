const express = require('express');

const {ProductController} = require('../controllers/product.js');
const { Middleware } = require('../helpers/middleware.js');


const ProductRouters = express.Router();


ProductRouters.get('/', Middleware.CheckToken, ProductController.getList)


ProductRouters.post('/', Middleware.CheckToken, ProductController.create)

ProductRouters.get('/:id', Middleware.CheckToken, ProductController.getOne)

ProductRouters.delete('/delete/:id', Middleware.CheckToken, ProductController.delete)

ProductRouters.patch('/update/:id', Middleware.CheckToken, ProductController.update)

module.exports = {ProductRouters}
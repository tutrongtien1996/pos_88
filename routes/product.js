const express = require('express');

const {ProductController} = require('../controllers/product.js');
const { Middleware } = require('../helpers/middleware.js');
const {validate} = require('../validate/product')
const {uploadProduct} = require('../common/fileupload')


const ProductRouters = express.Router();


ProductRouters.get('/', Middleware.CheckToken, ProductController.getList)


ProductRouters.post('/',  Middleware.CheckToken,  uploadProduct.single('avatar'), ProductController.create)

ProductRouters.get('/:id', Middleware.CheckToken, ProductController.getOne)

ProductRouters.delete('/:id', Middleware.CheckToken, ProductController.delete)

ProductRouters.patch('/:id', Middleware.CheckToken, uploadProduct.single('avatar'), ProductController.update)

ProductRouters.get('/image/:id', ProductController.getImage)

module.exports = {ProductRouters}
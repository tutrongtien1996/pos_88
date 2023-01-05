const express = require('express');

const {SampleProductController} = require('../controllers/sample_product.js');
const { Middleware } = require('../helpers/middleware.js');
const {uploadSampleProduct} = require('../common/fileupload')



const SampleProductRouters = express.Router();


SampleProductRouters.get('/',  SampleProductController.getList)

SampleProductRouters.post('/',  uploadSampleProduct.single('image'), SampleProductController.create)
SampleProductRouters.post('/products', Middleware.CheckToken,  SampleProductController.createMany)



SampleProductRouters.get('/:id',  SampleProductController.getOne)
SampleProductRouters.delete('/:id', SampleProductController.delete)
SampleProductRouters.patch('/:id', uploadSampleProduct.single('image'), SampleProductController.update)


module.exports = {SampleProductRouters}
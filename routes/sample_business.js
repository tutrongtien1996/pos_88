const express = require('express');

const {SampleBusinessController} = require('../controllers/sample_business.js');



const SampleBusinessRouters = express.Router();

SampleBusinessRouters.get('/',  SampleBusinessController.getList)
SampleBusinessRouters.post('/',  SampleBusinessController.create)



SampleBusinessRouters.get('/:id',  SampleBusinessController.getOne)
SampleBusinessRouters.delete('/:id', SampleBusinessController.delete)
SampleBusinessRouters.patch('/:id', SampleBusinessController.update)


module.exports = {SampleBusinessRouters}
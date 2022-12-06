const express = require('express');

const {CustomerController} = require('../controllers/customer.js')
const { Middleware } = require("../helpers/middleware.js");


const CustomerRouters = express.Router();


CustomerRouters.get('/',Middleware.CheckToken, CustomerController.getList)


CustomerRouters.post('/',Middleware.CheckToken, CustomerController.create)

CustomerRouters.get('/:id',Middleware.CheckToken, CustomerController.getOne)

CustomerRouters.delete('/:id',Middleware.CheckToken, CustomerController.delete)

CustomerRouters.patch('/:id',Middleware.CheckToken, CustomerController.update)

module.exports = {CustomerRouters}
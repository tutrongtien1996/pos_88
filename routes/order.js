const express = require('express');

const {OrderController} = require('../controllers/order.js')
const { Middleware } = require('../helpers/middleware.js');


const OrderRouters = express.Router();


OrderRouters.get('/', Middleware.CheckToken, OrderController.getList)


OrderRouters.post('/', Middleware.CheckToken, OrderController.create)

OrderRouters.get('/:id', Middleware.CheckToken, OrderController.getOne)

OrderRouters.delete('/delete/:id', Middleware.CheckToken, OrderController.delete)

OrderRouters.patch('/update/:id', Middleware.CheckToken, OrderController.update)

module.exports = {OrderRouters}

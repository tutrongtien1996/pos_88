const express = require('express');

const {PaymentController} = require('../controllers/payment.js');
const { Middleware } = require('../helpers/middleware.js');



const PaymentRouters = express.Router();


PaymentRouters.get('/', Middleware.CheckToken, PaymentController.getList)
PaymentRouters.post('/methods', Middleware.CheckToken, PaymentController.createList)

// PaymentRouters.get('/:id', Middleware.CheckToken, PaymentController.getOne)


module.exports = {PaymentRouters}
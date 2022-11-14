const express = require('express');

const AuthRoute = express.Router();
const {AuthController} = require('../controllers/auth');
const { Middleware } = require('../helpers/middleware');

AuthRoute.post('/login', Middleware.Cors, AuthController.login)
AuthRoute.post('/logout', AuthController.logout)
AuthRoute.post('/register', AuthController.register)
AuthRoute.post('/sendcode', AuthController.sendcode)


module.exports = {AuthRoute};
const express = require('express');

const AuthRoute = express.Router();
const {AuthController} = require('../controllers/auth');

AuthRoute.post('/login', AuthController.login)
AuthRoute.post('/logout', AuthController.logout)
AuthRoute.post('/register', AuthController.register)

module.exports = {AuthRoute};
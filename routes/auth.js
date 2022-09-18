const express = require('express');

const AuthRoute = express.Router();
const {AuthController} = require('../controllers/auth')

AuthRoute.get('/login', AuthController.login)
AuthRoute.post('/login', AuthController.login)


AuthRoute.post('/logout', AuthController.logout)

module.exports = {AuthRoute};
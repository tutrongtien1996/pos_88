const express = require('express');
const { Middleware } = require('../helpers/middleware');
const {UserController} = require('../controllers/user');
const {uploadUser} = require('../common/fileupload')


const UserRoutes = express.Router();

UserRoutes.get('', Middleware.CheckToken, UserController.list)
UserRoutes.post('', Middleware.CheckToken, uploadUser.single('avatar'), UserController.create)
UserRoutes.get('/:id', Middleware.CheckToken, UserController.getOne)
UserRoutes.patch('/:id/resetpassword', Middleware.CheckToken, UserController.resetPassword)
UserRoutes.patch('/:id', Middleware.CheckToken, uploadUser.single('avatar'), UserController.update)
UserRoutes.delete('/:id', Middleware.CheckToken, UserController.delete)


module.exports = {UserRoutes}
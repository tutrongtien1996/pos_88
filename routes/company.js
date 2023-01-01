const express = require('express');
const { Middleware } = require('../helpers/middleware');
const {CompanyController} = require('../controllers/company');
const {uploadCompany} = require('../common/fileupload')


const CompanyRouters = express.Router();
CompanyRouters.get('/:id', Middleware.CheckToken, CompanyController.getOne)
CompanyRouters.patch('/:id', Middleware.CheckToken, uploadCompany.single('avatar'), CompanyController.update)

module.exports = {CompanyRouters}
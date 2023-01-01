const {CompanyModel} = require('../models/company')
const {userTokenModel} = require('../models/auth')
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {validateRegisterRequest} = require('../validate/auth')
const fs = require('fs')
const bcrypt = require('bcrypt');
const saltRounds = 10;

class CompanyControllerClass {
    getOne (req, res){
        CompanyModel.getOne(req, (err, results) => {
            if(err) {
                return ResponseFail(res, "unsccessful", null)  
            }
            var company = {
                id: results[0].id,
                name: results[0].name,
                email: results[0].email,
                phone_number: results[0].phone_number,
                logo: results[0].logo,
                address: results[0].address,
                users: []
            };
            var user = {}
            results.forEach(element => {
                user.id = element.user_id;
                user.name = element.user_name;
                company.users.push(
                    {
                        id: element.user_id,
                        name: element.user_name
                    }
                )
            });
            return ResponseSuccess(res, "Successful", company)
        })
    }

    update (req, res) {
        CompanyModel.getOne(req, (err, companyGetOne) => {
            if(err) throw err;
            if(companyGetOne.length == 0){
                return ResponseFail(res, "khong duoc quyen chinh sua cong ty nay", null)  
            }
            let company = {
                id: req.params.id,
                name : req.body.name,
                email: req.body.email,
                phone_number: req.body.phone_number,
                address: req.body.address
            }
            if(req.file){
                company.logo = req.file.path
            }
            else{
                company.logo = ""
            }
            CompanyModel.update(company, (err, result) => {
                if(err) {
                    if(req.file){
                        fs.unlink(result[0].avatar, (err, result) => {
                            if(err) throw err
                        })
                        return ResponseFail(res, "khong the update")  
                    }
                    return ResponseFail(res, "khong the update2")  
                }
                if(companyGetOne[0].logo){
                    fs.unlink(companyGetOne[0].logo, (err, result) => {
                        if(err) throw err
                    })
                }
                return ResponseSuccess(res, "Success", company)
            })
        })
    }

   

    
}
const CompanyController = new CompanyControllerClass();
module.exports = {CompanyController}
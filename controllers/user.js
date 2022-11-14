const {UserModel} = require('../models/user')
const {userTokenModel} = require('../models/auth')
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {validateRegisterRequest} = require('../validate/auth')
const fs = require('fs')
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserControllerClass {

    list (req, res) {
        UserModel.list(req, (err, results) => {
            if(err) throw err;
            return ResponseSuccess(res, "Success", results)
        })
    }
    

    create (req, res) {
        var errors = validateRegisterRequest(req)
        if (Object.keys(errors).length > 0) {
            return ResponseFail(res, "Invalid input", errors)
        }
        let user = {
            name : req.body.name,
            user_name: req.body.user_name,
            password: req.body.password,
            company_id: req.auth_user.company_id,
            email: req.body.email,
            phone_number: req.body.phone_number,
            avatar: req.file.path
        }
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                userTokenModel.register(user, (err, result) => {
                    if(err) 
                    {
                        fs.unlink(req.file.path, (err, result) => {
                        })
                        return ResponseFail(res, "unsccess")  
                    }
                    let data = {
                        name : user.name,
                        user_id: result.insertId,
                        user_name : user.user_name,
                        company_id : user.company_id,
                        email : user.email,
                        phone_number : user.phone_number,
                        avatar: user.avatar,
                        created_at: user.created_at,
                        updated_at: user.updated_at
                    }
                    return ResponseSuccess(res, "Register success successful", data) 
                })
            });
        });
    }

    getOne (req, res){
        UserModel.getOne(req, (err, result) => {
            if(err) {
                return ResponseFail(res, "unsccessful", null)  
            }
            return ResponseSuccess(res, "Successful", result[0])
        })
    }

    update (req, res) {
        UserModel.getOne(req, (err, result) => {
            if(err) throw err;
            fs.unlink(result[0].avatar, (err, result) => {
            })
            let user = {
                id: req.auth_user.id,
                name : req.body.name,
                user_name: req.body.user_name,
                password: req.body.password,
                company_id: req.auth_user.company_id,
                email: req.body.email,
                phone_number: req.body.phone_number,
                avatar: req.file.path
            }
            UserModel.update(user, (err, result) => {
                if(err) {
                    return ResponseFail(res, "user_name da ton tai")  
                }
                return ResponseSuccess(res, "Success", user)
            })
        })
    }

    delete (req, res){
        UserModel.getOne(req, (err, result) => {
            if(err) throw err;
            fs.unlink(result[0].avatar, (err, result) => {
            })
            UserModel.delete(req, (err, result) => {
                if (err) {return ResponseFail(res, "unsccess")  }
                return ResponseSuccess(res, "Success", result)
            })
        })
    }
}
const UserController = new UserControllerClass();
module.exports = {UserController}
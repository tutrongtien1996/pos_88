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
        }
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                if(req.file){
                    user.avatar = req.file.path
                }
                else{
                    user.avatar = ""
                }
                userTokenModel.register(user, (err, result) => {
                    if(err) 
                    {
                        if(req.file){
                            fs.unlink(req.file.path, (err, result) => {
                                if(err) throw err
                            })
                            return ResponseFail(res, "unsccess")  
                        }
                        return ResponseFail(res, "unsccess")  
                    }
                    let data = {
                        name : user.name,
                        id: result.insertId,
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
        UserModel.getOne(req, (err, userGetOne) => {
            if(err) throw err;
            if(userGetOne.length == 0){
                return ResponseFail(res, "khong duoc quyen chinh sua tai khoan nay", null)  
            }
            if(userGetOne.password != req.body.old_password){

            }
            let user = {
                id: req.params.id,
                name : req.body.name,
                user_name: req.body.user_name,
                company_id: req.auth_user.company_id,
                email: req.body.email,
                phone_number: req.body.phone_number,
            }
            if(req.file){
                user.avatar = req.file.path
            }
            else{
                user.avatar = ""
            }
            UserModel.update(user, (err, result) => {
                if(err) {
                    if(req.file){
                        fs.unlink(result[0].avatar, (err, result) => {
                            if(err) throw err
                        })
                        return ResponseFail(res, "user_name da ton tai")  
                    }
                    return ResponseFail(res, "user_name da ton tai")  
                }
                if(userGetOne[0].avatar){
                    fs.unlink(userGetOne[0].avatar, (err, result) => {
                        if(err) throw err
                    })
                }
                return ResponseSuccess(res, "Success", user)
            })
        })
    }

    resetPassword(req, res){
        UserModel.getOne(req, (err, userGetOne) => {
            if(err) throw err;
            if(userGetOne.length == 0){
                return ResponseFail(res, "khong duoc quyen chinh sua tai khoan nay", null)  
            }
            bcrypt.compare(req.body.old_password, userGetOne[0].password, function(err, isValid){
                if(isValid){
                    let user = {
                        id: userGetOne[0].id
                    }
                    bcrypt.genSalt(saltRounds, function(err, salt) {
                        bcrypt.hash(req.body.password, salt, function(err, hash) {
                            user.password = hash;
                            UserModel.resetPassword(user, (err, result) => {
                                if (err) throw err
                            })
                        })
                    })
                    return ResponseSuccess(res, "Success", userGetOne) 
                }
                return ResponseFail(res, "Invalid Password", null)   
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
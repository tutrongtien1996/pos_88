

var http = require('http');
const { ResponseFail, ResponseSuccess } = require('../helpers/response.js');
const {userTokenModel} = require('../models/auth')
const { GenerateStr } = require('../helpers/util.js');
const { GetBearerToken} = require('../helpers/util.js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const { validateLoginRequest, validateRegisterRequest } = require('../validate/auth.js');
const saltRounds = 10;



class AuthControllerClass {
    
    async login (req, res){
        var errors = validateLoginRequest(req)
        if (Object.keys(errors).length > 0) {
            return ResponseFail(res, "Invalid input", errors)
        }
        var input = {
            user_name:req.body.user_name,
            password: req.body.password
        }
        
       
        userTokenModel.login(input, (err, results) => {
            if(err) throw (err);
            if(results && results.length > 0){
                bcrypt.compare(input.password, results[0].password, function(err, isValid) {
                    if (isValid) {
                        var token = GenerateStr(60);
                        let data = {
                            name : results[0].name,
                            user_id: results[0].id,
                            user_name : results[0].user_name,
                            token: token,
                            company_id : results[0].company_id,
                            email : results[0].email,
                            phone_number : results[0].phone_number,
                            avatar: results[0].avatar,
                            created_at: results[0].created_at,
                            updated_at: results[0].updated_at
                        }
                        //set token trong bang auths
                        userTokenModel.insertToken(data, (err, results) => {
                            if(err) throw (err);
                        })
                        return ResponseSuccess(res, "Login successful", data)
                    }
                });
            } else {
                return ResponseFail(res, "Username or password is wrong", null)
            }
        })

    }

    logout (req, res){
        let user = {
            token : GetBearerToken(req),
            user_name: req.body.user_name
        }
        userTokenModel.logout(user, (err, result) => {
            if (err) throw err
            return ResponseSuccess(res, "Logout successful")
        })
    }

    register (req, res){
        var errors = validateRegisterRequest(req)
        if (Object.keys(errors).length > 0) {
            return ResponseFail(res, "Invalid input", errors)
        }
        var user = req.body;
        
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                userTokenModel.register(user, (err, result) => {
                    if(err) return ResponseFail(res, "Username already exists", null)
                    var token = GenerateStr(60);
                    let data = {
                        name : user.name,
                        user_id: result.insertId,
                        user_name : user.user_name,
                        token: token,
                        company_id : user.company_id,
                        email : user.email,
                        phone_number : user.phone_number,
                        avatar: user.avatar,
                        created_at: user.created_at,
                        updated_at: user.updated_at
                    }
                    console.log(user.password)
                    userTokenModel.insertToken(data, (err, results) => {
                        if(err) throw (err);
                        return ResponseSuccess(res, "Login successful", data)
                    })  
                })
            });
        });
        
    }
}
const AuthController = new AuthControllerClass();
module.exports = {AuthController}
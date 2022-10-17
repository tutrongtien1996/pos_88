

var http = require('http');
const { ResponseFail, ResponseSuccess } = require('../helpers/response.js');
const {userTokenModel} = require('../models/auth')
const { GenerateStr } = require('../helpers/util.js');
const { GetBearerToken} = require('../helpers/util.js');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;



class AuthControllerClass {
    
    async login (req, res){
        var dataLogin = {
            user_name:req.body.user_name,
            password: req.body.password
        }
       
        if (dataLogin.user_name && dataLogin.password) {
            userTokenModel.login(dataLogin, (err, results) => {
                if(err) throw (err);
                bcrypt.compare(dataLogin.password, results[0].password, function(err, result) {
                    if(result){
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
                    }  else {
                        return ResponseFail(res, "Username or password is wrong", null)
                    }
                });        
            })
        } else {
            return ResponseFail(res, "", {
                username: "Is required",
                password: "Is required"
            })
        }

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
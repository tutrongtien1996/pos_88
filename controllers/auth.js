
const nodemailer = require("nodemailer");
const { ResponseFail, ResponseSuccess } = require('../helpers/response.js');
const {userTokenModel} = require('../models/auth')
const {UserModel} = require('../models/user')
const {CodeModel} = require('../models/code')
const { GenerateStr, ReadHTMLFile } = require('../helpers/util.js');
const { GetBearerToken} = require('../helpers/util.js');
const bcrypt = require('bcrypt');
const { validateLoginRequest, validateRegisterRequest } = require('../validate/auth.js');
const { mysqlConnection } = require("../common/connect.js");
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
                    if(!isValid) return ResponseFail(res, "Invalid Password", null)
                    if (isValid) {
                        var token = GenerateStr(60);
                        let data = {
                            name : results[0].name,
                            id: results[0].id,
                            user_name : results[0].user_name,
                            token: token,
                            email : results[0].email,
                            phone_number : results[0].phone_number,
                            avatar: results[0].avatar,
                            company: {
                                id: results[0].company_id,
                                name: results[0].company_name,
                                email: results[0].company_email,
                                phone_number: results[0].company_phone,
                                address: results[0].company_address,
                                logo: results[0].company_logo
                            },
                            created_at: results[0].created_at,
                            updated_at: results[0].updated_at
                        }
                
                        //set token trong bang auths
                        var inputAuth = {
                            token: token,
                            user_id: results[0].id,
                        }
                        userTokenModel.insertToken(inputAuth, (err, results) => {
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
        let user = {
            name : "",
            user_name: req.body.user_name,
            password: req.body.password,
            email: "",
            phone_number: "",
            avatar: ""
        }
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                user.password = hash;
                userTokenModel.registerCompany(user, (err, companyData) => {
                    if(err) return ResponseFail(res, "Username already exists", null)
                    user.company_id = companyData.insertId;
                    userTokenModel.register(user, (err, result) => {
                        if(err){
                            userTokenModel.deleteCompany(user, (error, resultDelete) => {
                                if(error) throw err;
                            })
                            return ResponseFail(res, "Username already exists", null)
                        } 
                        user.user_id = result.insertId;
                        req.auth_user = user;
                        req.params.id = req.auth_user.user_id
                        
                        userTokenModel.login(user, (err, results) => {
                            if(err) throw err
                            var token = GenerateStr(60);
                            let data = {
                                name : results[0].name,
                                id: results[0].id,
                                user_name : results[0].user_name,
                                token: token,
                                email : results[0].email,
                                phone_number : results[0].phone_number,
                                avatar: results[0].avatar,
                                company: {
                                    id: results[0].company_id,
                                    name: results[0].company_name,
                                    email: results[0].company_email,
                                    phone_number: results[0].company_phone,
                                    address: results[0].company_address,
                                    logo: results[0].company_logo
                                },
                                created_at: results[0].created_at,
                                updated_at: results[0].updated_at
                            }
                            var inputAuth = {
                                token: token,
                                user_id: results[0].id,
                            }
                            userTokenModel.insertToken(inputAuth, (err, results) => {
                                if(err) return ResponseFail(res, "Not create token", null)
                                return ResponseSuccess(res, "Register success successful", data)
                            })  
                        }) 
                    })
                }) 
            });
        });
    }

    async sendcode  (req, res){ 
        try {
            let data = await UserModel.findUser(req.body.email)
            let code = Math.floor(Math.random() * 1000000);

            const content = ReadHTMLFile('./resource/mail/one_time_password.html', {code: code})
            var transport = nodemailer.createTransport({
                host: process.env.mailhost,
                port: process.env.mailPort,
                auth: {
                    user: process.env.email,
                    pass: process.env.pass
                }
                }); 
                
            await transport.sendMail({
                from: process.env.email,
                to: req.body.email, 
                subject: "Hello ✔", 
                html: content, 
                }, (err, result) => {
                if(err){
                    console.log(err)
                    return res.send(err)
                }
                let query = `INSERT INTO codes (email, code)
                VALUES ('${req.body.email}', '${code}')`
                mysqlConnection.query(query, (err, result) => {
                    if (err) throw err
                })
            });
            return ResponseSuccess(res, "thanh cong", data) 
        }
        catch (err) {
            return ResponseFail(res, err)
        }
    }
    
    async resetpass(req, res){
        try{
            let data = await CodeModel.getOne(req.body)
            data.password = req.body.password;
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(data.password, salt, function(err, hash) {
                    data.password = hash
                    UserModel.resetPass(data, (err, result) => {
                    if(err) throw err;
                    var token = GenerateStr(60);
                    data.token = token;
                    var inputAuth = {
                        token: token,
                        user_id: data.id,
                    }
                    userTokenModel.insertToken(inputAuth, (err, results) => {
                        if(err) throw (err);
                    })
                    return ResponseSuccess(res, "Login successful", data)
                    })
                })
            })
            
        }
        catch(err){
            return ResponseFail(res, err, null)
        } 
    }              
}
const AuthController = new AuthControllerClass();
module.exports = {AuthController}
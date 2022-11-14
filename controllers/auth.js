
const nodemailer = require("nodemailer");
const { ResponseFail, ResponseSuccess } = require('../helpers/response.js');
const {userTokenModel} = require('../models/auth')
const {UserModel} = require('../models/user')
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
        let user = {
            name : "",
            user_name: req.body.user_name,
            password: req.body.password,
            email: "",
            phone_number: "",
            avatar: ""
        }
        // let query = `SELECT * FROM codes WHERE code = '${user.code}' AND email = '${user.email}'`;
        // mysqlConnection.query(query, (err, result) => {
        //     if(err) throw err;
        //     if(result.length == 0){
        //         return ResponseFail(res, "Invalid input", errors)
        //     }
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
                        var token = GenerateStr(60);
                        req.auth_user.token = token;
                        var data = {};
                        userTokenModel.insertToken(req.auth_user, (err, results) => {
                            if(err) throw (err);
                        })
                        req.params.id = req.auth_user.user_id
                        UserModel.getOne(req, (err, userData) => {
                            if(err) throw err
                            console.log(userData)
                            data.name = userData[0].name;
                            data.user_id = userData[0].id;
                            data.user_name = userData[0].user_name;
                            data.company_id = userData[0].company_id;
                            data.email = userData[0].email;
                            data.phone_number = userData[0].phone_number;
                            data.avatar = userData[0].avatar;
                            data.created_at = userData[0].created_at;
                            data.updated_at = userData[0].updated_at
                            userTokenModel.insertToken(data, (err, results) => {
                                if(err) return ResponseFail(res, "Not create token", null)
                                return ResponseSuccess(res, "Register success successful", data)
                            })  
                        })
                        
                    })
                }) 
            });
        });
        // }) 
    }



    async sendcode (req, res){
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
          }, (err) => {
            if(err){
                console.log(err)
                return res.send(err)
            }
            let query = `INSERT INTO codes (email, phone_number, code)
            VALUES ('${req.body.email}','', '${code}')`
            mysqlConnection.query(query, (err, result) => {
                if (err) throw err
                return res.send('thanh cong')
            })
          });
    }
}
const AuthController = new AuthControllerClass();
module.exports = {AuthController}


var http = require('http');
const {mysqlConnection} = require('../comon/connect.js');
const { ResponseFail, ResponseSuccess } = require('../helpers/response.js');
const {userTokenModle} = require('../modles/auth')
const { GenerateStr } = require('../helpers/util.js');
const { GetBearerToken} = require('../helpers/util.js');
const jwt = require('jsonwebtoken');

var userName = "";

class AuthControllerClass {
    
    login (req, res){
        let dataLogin = {
            user_name:req.body.user_name,
            password: req.body.password
        }
        
        if (dataLogin.user_name && dataLogin.password) {
            userTokenModle.login(dataLogin, (err, results) => {
                if(err) throw (err);
                if(results.length > 0){
                    var token = GenerateStr(60);
                    let data = {
                        token : token,
                        user: results[0]
                    }
                    //set token trong bang auths
                    userTokenModle.insertToken(data, token, (err, results) => {
                        if(err) throw (err);
                        console.log(data)
                    })

                    return ResponseSuccess(res, "Login successful", data)
                }  else {
                    return ResponseFail(res, "Username or password is wrong", null)
                }
                        
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
        userTokenModle.logout(user, (err, result) => {
            if (err) throw err
            return ResponseSuccess(res, "Logout successful")
        })
    }
}
const AuthController = new AuthControllerClass();
module.exports = {AuthController}
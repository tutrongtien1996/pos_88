const { ResponseFail } = require("./response");
const {mysqlConnection} = require('../comon/connect.js');

function GenerateStr(len) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < len; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function GetBearerToken(req) {
    // Lay token tu header
    let bearerToken = req.header("Authorization");
    if (bearerToken == null) {
    return null
    }
    let tokenArray = bearerToken.split(" ");
    let token = tokenArray.length > 1 ? tokenArray[1] : null;
    return token;
}



async function  CheckToken(req, res, data) {
    
    let token = await GetBearerToken(req)
    var result = await _getToken(token)
    return result.length > 0;
}

function _getToken(token) {
    return new Promise ((resolve, reject) => {
        let query = `SELECT user_name, token FROM auths WHERE token = '${token}'`;
        mysqlConnection.query(query, (err, results) => {
            if(err) throw err
            resolve(results)
        })
    })
}


module.exports = {GenerateStr,  GetBearerToken, CheckToken}

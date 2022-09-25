const {mysqlConnection} = require('../comon/connect.js');

class userToken {
   id
   user_name
   token

   login(data, callback){
    let query = `SELECT * FROM users WHERE user_name = '${data.user_name}' AND password = '${data.password}'`
    mysqlConnection.query(query, callback)
   }

   insertToken(data,token, callback){
    let query = `INSERT INTO auths (token, user_id) VALUES ('${token}', '${data.user.id}')`;
     mysqlConnection.query(query, callback)
   }

   logout(user, callback){
    let query = `DELETE FROM auths WHERE token = '${user.token}'`
    mysqlConnection.query(query, callback)
   }
}
const userTokenModle = new userToken()

module.exports = {userTokenModle}

const {mysqlConnection} = require('../comon/connect.js');

class userToken {
   id
   user_name
   token

   login(data, callback){
    let query = `SELECT * FROM users WHERE user_name = '${data.user_name}' AND password = '${data.password}'`
    mysqlConnection.query(query, callback)
   }

   insertToken(data, callback){
    let query = `INSERT INTO auths (token, user_id) VALUES ('${data.token}', '${data.user_id}')`;
     mysqlConnection.query(query, callback)
   }

   logout(user, callback){
    let query = `DELETE FROM auths WHERE token = '${user.token}'`
    mysqlConnection.query(query, callback)
   }

   register(user, callback){
      let query = `INSERT INTO users (name, user_name, password, company_id, email, phone_number, avatar)
      VALUES ('${user.name}', '${user.user_name}', '${user.password}', '${user.company_id}', '${user.email}', '${user.phone_number}', '${user.avatar}')`;
      mysqlConnection.query(query, callback)
   }
}
const userTokenModle = new userToken()

module.exports = {userTokenModle}

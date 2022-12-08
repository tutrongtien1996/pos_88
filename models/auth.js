const {mysqlConnection} = require('../common/connect.js');

class userToken {
   login(data, callback){
    let query = `SELECT * FROM users WHERE user_name = '${data.user_name}' LIMIT 1`
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

   registerCompany(company, callback){
      let query = `INSERT INTO companies (name) VALUES ('${company.user_name}')`;
      mysqlConnection.query(query, callback)
   }
   deleteCompany(company, callback){
      let query = `DELETE FROM companies WHERE id = '${company.company_id}'`;
      mysqlConnection.query(query, callback)
   }
   
   register(user, callback){
      let query = `INSERT INTO users (user_name, password, company_id, name, email, phone_number, avatar)
      VALUES ('${user.user_name}', '${user.password}', '${user.company_id}', '${user.name}', '${user.email}', '${user.phone_number}', '${user.avatar}')`;
      mysqlConnection.query(query, callback)
   }
}
const userTokenModel = new userToken()

module.exports = {userTokenModel}

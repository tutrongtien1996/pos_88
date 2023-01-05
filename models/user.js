const { mysqlConnection } = require("../common/connect.js");

class UserModelClass {
    list (req, callback){
        let query = `SELECT * FROM users WHERE company_id = '${req.auth_user.company_id}'`;
        mysqlConnection.query(query, callback)
    }
    


    getOne (req, callback){
        let query = `SELECT * FROM users WHERE id = '${req.params.id}' AND company_id = '${req.auth_user.company_id}' LIMIT 1`;
        mysqlConnection.query(query, callback)
    }

    update (user, callback) {
        let query = `UPDATE users SET name = '${user.name}', user_name = '${user.user_name}',  email = '${user.email}', phone_number = '${user.phone_number}', avatar = '${user.avatar}', company_id = '${user.company_id}' WHERE id = '${user.id}'`
        mysqlConnection.query(query, callback)
    }

    delete (req, callback) {
        let query = `DELETE FROM users WHERE id = '${req.params.id}' AND company_id = '${req.auth_user.company_id}'`;
        mysqlConnection.query(query, callback)
    }

    resetPassword (user, callback) {
        let query = `UPDATE users SET password = "${user.password}" WHERE id = '${user.id}'`
        mysqlConnection.query(query, callback)
    }

    findUser (input) {
        if(input){
            return new Promise ((resolve, reject) => {
                let query = `SELECT * FROM users WHERE email = '${input}' LIMIT 1`;

                mysqlConnection.query(query, (err, results) => {
                    if(err) {
                        reject("Failed to fetch item, error: " + err.message)
                    }
                    if (results.length == 0) {
                        reject("Could not find the item")
                    } else {
                        resolve(results[0])
                    }
                })
            })
        }
    }
}

const UserModel = new UserModelClass()
module.exports = {UserModel}

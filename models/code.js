const {mysqlConnection} = require('../common/connect')

class Code {
    getOne(input) {
        if(input){
            return new Promise ((resolve, reject) => {
                let query = `SELECT codes.email, codes.code ,users.id, users.name, users.phone_number, users.user_name, users.avatar, users.company_id FROM codes
                INNER JOIN users ON codes.email = users.email
                WHERE codes.email = "${input.email}" AND codes.code = "${input.code}" LIMIT 1`;
                mysqlConnection.query(query, (err, results) => {
                    if(err){
                        reject("Failed to fetch item, error: " + err.message)
                    } 
                    if(results.length == 0){
                        reject("email or code khong ton tai")
                    }
                    resolve(results[0])
                })
            }) 
        }
    }
}

const CodeModel = new Code()

module.exports = {CodeModel}
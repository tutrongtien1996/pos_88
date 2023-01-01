const { mysqlConnection } = require("../common/connect.js");

class CompanyModelClass {
   
    getOne (req, callback){
        let query = `SELECT companies.* , users.id AS user_id, users.user_name AS user_name FROM companies 
        LEFT JOIN users
        ON users.company_id = companies.id
        WHERE companies.id = '${req.auth_user.company_id}'`;
        mysqlConnection.query(query, callback)
    }

    update (company, callback) {
        let query = `UPDATE companies SET name = '${company.name}',   email = '${company.email}', phone_number = '${company.phone_number}', logo = '${company.logo}', address = '${company.address}' WHERE id = '${company.id}'`
        mysqlConnection.query(query, callback)
    }
}

const CompanyModel = new CompanyModelClass()
module.exports = {CompanyModel}

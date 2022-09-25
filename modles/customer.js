const {mysqlConnection} = require('../comon/connect.js');

class customer {
    id
    name
    company_id
    phone_number
    address
    created_at
    updated_at

    getList(req, callback){
        let query = `SELECT * FROM customers WHERE company_id = '${req.auth_user.company_id}'`;
        if (req.query.page) {
            query += " LIMIT " + LIMIT + " OFFSET "+((req.query.page - 1) * LIMIT)
        }
        mysqlConnection.query(query, callback)
    }

    create(req, callback){
        let customer = req.body;
        if(customer && customer.name){
            let query = `INSERT INTO customers (name, phone_number, address, company_id)
            VALUES ('${customer.name}', '${customer.phone_number}', '${customer.address}', '${req.auth_user.company_id}')`;
            mysqlConnection.query(query, callback)

        }
    }

    getOne (input, callback) {
        let query = `SELECT id, name, company_id, address, phone_number, created_at, updated_at FROM customers WHERE id = '${input.id}' AND company_id = '${input.company_id}' `
        mysqlConnection.query(query, callback)
    }

    delete (input, callback){
        const query = `DELETE FROM customers WHERE id = ${input.id} AND company_id = '${input.company_id}'`;
        mysqlConnection.query(query, callback)
    }
    
    update (input, callback){
        const query = `UPDATE customers SET name = '${input.body.name}', phone_number = '${input.body.phone_number}', address = '${input.body.address}' WHERE id = ${input.id} AND company_id = '${input.company_id}'`;
        mysqlConnection.query(query, callback)
    }
}
const customerModle = new customer()

module.exports = {customerModle}

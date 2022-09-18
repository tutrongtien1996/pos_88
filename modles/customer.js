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
        let query = "SELECT * FROM customers";
        if (req.query.page) {
            query += " LIMIT " + LIMIT + " OFFSET "+((req.query.page - 1) * LIMIT)
        }
        mysqlConnection.query(query, callback)
    }

    create(req, callback){
        let customer = req.body;
        if(customer && customer.name){
            let query = `INSERT INTO customers (name, phone_number, address)
            VALUES ('${customer.name}', '${customer.phone_number}', '${customer.address}')`;
            mysqlConnection.query(query, callback)

        }
    }

    getOne (req, id, callback) {
        if(id){
            let query = `SELECT name, company_id, address, phone_number, created_at, updated_at FROM customers WHERE id = '${id}' `
            mysqlConnection.query(query, callback)
        }
        if(req.params){
            let query = `SELECT name, company_id, address, phone_number, created_at, updated_at FROM customers WHERE id = '${req.params.id}' `
            mysqlConnection.query(query, callback)  
        }
        
    }

    delete (req, callback){
        const {id} = req.params;
        const query = `DELETE FROM customers WHERE id = ${id}`;
        mysqlConnection.query(query, callback)
    }
    
    update (req, callback){
        const {id} = req.params;
        const customerUpdate = (req.body)
        const query = `UPDATE customers SET name = '${customerUpdate.name}', phone_number = '${customerUpdate.phone_number}', address = '${customerUpdate.address}' WHERE id = ${id}`;
        mysqlConnection.query(query, callback)
    }
}
const customerModle = new customer()

module.exports = {customerModle}

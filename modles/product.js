const {mysqlConnection} = require('../comon/connect.js');

class product {
    id
    name
    company_id
    price
    image
    created_at
    updated_at

    getList(req, callback){
        let query = "SELECT * FROM products";
        if (req.query.page) {
            query += " LIMIT " + LIMIT + " OFFSET "+((req.query.page - 1) * LIMIT)
        }
        mysqlConnection.query(query, callback)
    }

    create(req, callback){
        let product = req.body;
        if(product && product.name && product.price){
            let query = `INSERT INTO products (name, price)
            VALUES ('${product.name}', '${product.price}')`;
            mysqlConnection.query(query, callback)

        }
    }

    getOne (req, id, callback) {
        if(id){
            let query = `SELECT name, company_id, price, image, created_at, updated_at FROM products WHERE id = '${id}' `
            mysqlConnection.query(query, callback)
        }
        if(req.params){
            let query = `SELECT name, company_id, price, image, created_at, updated_at FROM products WHERE id = '${req.params.id}' `
            mysqlConnection.query(query, callback)  
        }
        
    }

    delete (req, callback){
        const {id} = req.params;
        const query = `DELETE FROM products WHERE id = '${id}'`;
        mysqlConnection.query(query, callback)
    }
    
    update (req, callback){
        const {id} = req.params;
        const product = (req.body)
        const query = `UPDATE products SET name = '${product.name}', price = '${product.price}' WHERE id = '${id}'`;
    
        mysqlConnection.query(query, callback)
    }
}
const productModle = new product()

module.exports = {productModle}

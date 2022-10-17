const {mysqlConnection} = require('../comon/connect.js');
const { checkQuery } = require('../helpers/checkQuery.js');

class product {
    id
    name
    company_id
    price
    image
    created_at
    updated_at

    getList(req, callback){
        let query = `SELECT * FROM products WHERE company_id = '${req.auth_user.company_id}'`;
       
        mysqlConnection.query(checkQuery.Products(req, query), callback)
    }

    create(product, callback){
        if(product && product.body.name && product.body.price ){
            let query = `INSERT INTO products (name, price, image, company_id)
            VALUES ('${product.body.name}', '${product.body.price}', '${product.body.image}', '${product.auth_user.company_id}')`;
            mysqlConnection.query(query, callback)
        }
    }

    getOne (input, callback) {
        if(input){
            let query = `SELECT id, name, company_id, price, image, created_at, updated_at FROM products WHERE id = '${input.id}' AND company_id = '${input.company_id}' `
            mysqlConnection.query(query, callback)
        }
    }

    delete (input, callback){
        const query = `DELETE FROM products WHERE id = '${input.id}' AND company_id = '${input.company_id}'`;
        mysqlConnection.query(query, callback)
    }
    
    update (product, callback){
        const query = `UPDATE products SET name = '${product.body.name}', price = '${product.body.price}', image = '${product.body.image}' WHERE id = '${product.params.id}' AND company_id = '${product.auth_user.company_id}'`;
        mysqlConnection.query(query, callback)
    }
}
const productModle = new product()

module.exports = {productModle}

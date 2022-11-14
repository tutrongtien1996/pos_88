const {mysqlConnection} = require('../common/connect.js');
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
        let query = `SELECT *, IF (image is not null, CONCAT("public/products/",id,"/", image), "") as image FROM products WHERE company_id = '${req.auth_user.company_id}'`;
       
        mysqlConnection.query(checkQuery.Products(req, query), callback)
    }

    create(product, callback){
        if(product && product.body.name && product.body.price ){
            let query = `INSERT INTO products (name, price, image, company_id)
            VALUES ('${product.body.name}', '${product.body.price}', '${product.file.path}', '${product.auth_user.company_id}')`;
            mysqlConnection.query(query, callback)
        }
    }

    getOne (input) {
        if(input){
            return new Promise ((resolve, reject) => {
                let query = `SELECT id, name, company_id, price, CONCAT("public/products/1/", image) as image, created_at, updated_at FROM products WHERE id = '${input.id}' AND company_id = '${input.company_id}' `
        
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

    delete (input, callback){
        const query = `DELETE FROM products WHERE id = '${input.id}' AND company_id = '${input.company_id}'`;
        mysqlConnection.query(query, callback)
    }
    
    update (product, callback){
        const query = `UPDATE products SET name = '${product.body.name}', price = '${product.body.price}', image = '${product.body.image}' WHERE id = '${product.params.id}' AND company_id = '${product.auth_user.company_id}'`;
        mysqlConnection.query(query, callback)
    }
}
const productModel = new product()

module.exports = {productModel}

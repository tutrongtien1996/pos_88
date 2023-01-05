const {mysqlConnection} = require('../common/connect.js');
const { checkQuery } = require('../helpers/checkQuery.js');

class sampleProduct {

    getList(req, callback){
        let query = `SELECT name, price, image, category_id FROM sample_products WHERE business_id = ${req.query.business}`;
        mysqlConnection.query(query, callback)
    }


    create(product, callback){
        if(product && product.body.name && product.body.price ){
            let query = `INSERT INTO sample_products (name, price, image, business_id, category_id)
            VALUES ('${product.body.name}', '${product.body.price}', '${product.body.image}', '${product.body.business_id}', '${product.body.category_id}')`;
            mysqlConnection.query(query, callback)
        }
    }


    createMany(data, callback){
        if(data){
            let values = ""
            data.forEach(product => {
                values += ` ('${product.name}', '${product.price}', '${product.image}', '${data.company_id}'),`
            });
            values = values.slice(0, values.length - 1)
            let query = `INSERT INTO products (name, price, image, company_id)
            VALUES ${values}`;
            mysqlConnection.query(query, callback)
        }
    }

    getOne (id) {
        if(id){
            return new Promise ((resolve, reject) => {
                let query = `SELECT * FROM sample_products WHERE id = '${id}'`
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

    delete (id, callback){
        const query = `DELETE FROM sample_products WHERE id = '${id}'`;
        mysqlConnection.query(query, callback)
    }

    update (product, callback){
        const query = `UPDATE sample_products SET name = '${product.body.name}', price = '${product.body.price}', image = '${product.body.image}', category_id = '${product.body.category_id}' WHERE id = '${product.params.id}'`;
        mysqlConnection.query(query, callback)
    }
}
const sampleProductModel = new sampleProduct()

module.exports = {sampleProductModel}

const {mysqlConnection} = require('../common/connect.js');

class sampleBusiness {

    getList(req, callback){
        let query = `SELECT * FROM sample_business`;
        mysqlConnection.query(query, callback)
    }

    create(product, callback){
        if(product && product.name){
            let query = `INSERT INTO sample_business (name)
            VALUES ('${product.name}')`;
            mysqlConnection.query(query, callback)
        }
    }

    getOne(id, callback) {
        const query = `SELECT * FROM sample_business WHERE id = '${id}'`;
        mysqlConnection.query(query, callback)
    }

    update(business, callback){
        const query = `UPDATE sample_business SET name = "${business.name}" WHERE id = '${business.id}'`;
        mysqlConnection.query(query, callback)
    }

    delete(id, callback){
        const query = `DELETE FROM sample_business WHERE id = '${id}'`;
        mysqlConnection.query(query, callback)
    }


}
const sampleBusinessModel = new sampleBusiness()

module.exports = {sampleBusinessModel}

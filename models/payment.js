const {mysqlConnection} = require('../common/connect.js');
const { checkQuery } = require('../helpers/checkQuery.js');

class payment {
   

    getList(req, callback){
        let query = `SELECT * FROM payments WHERE company_id = '${req.auth_user.company_id}'`;
        mysqlConnection.query(query, callback)
    }

    createList(data, callback){
        if(data){
            let values = ""
            data.forEach(product => {
                values += ` ('${product.name}', '${data.company_id}'),`
            });
            values = values.slice(0, values.length - 1)
            let query = `INSERT INTO payments (name, company_id)
            VALUES ${values}`;
            mysqlConnection.query(query, callback)
        }
    }

   

    // getOne (input) {
    //     if(input){
    //         return new Promise ((resolve, reject) => {
    //             let query = `SELECT id, name, company_id, price,  image, created_at, updated_at FROM payments WHERE id = '${input.id}' AND company_id = '${input.company_id}' `
        
    //             mysqlConnection.query(query, (err, results) => {
    //                 if(err) {
    //                     reject("Failed to fetch item, error: " + err.message)
    //                 }
    //                 if (results.length == 0) {
    //                     reject("Could not find the item")
    //                 } else {
    //                     resolve(results[0])
    //                 }
    //             })
    //         })
    //     }
    // }

   
}
const paymentModel = new payment()

module.exports = {paymentModel}

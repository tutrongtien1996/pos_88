const {mysqlConnection} = require('../comon/connect.js');
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {productModle} = require('../modles/product')


class ProductControllerClass {


    getList (req, res){
        productModle.getList(req, (err, results) => {
            return ResponseSuccess(res, "", results)
        })
       
    }
    create (req, res){
        productModle.create(req, (err, data) => {
            if (err) throw err;
            productModle.getOne(req, data.insertId, (err, result) => {
                if (err) throw err 
                return ResponseSuccess(res, "", result[0])
            })
        })
    } 

    getOne (req, res) {
        const {id} = req.params;
    
        const query = `SELECT * FROM products WHERE id = ${id}`;
        mysqlConnection.query(query, (err, data) => {
            console.log(query)
            return ResponseSuccess(res, "", data[0])
        })
    }

    delete (req, res) {
       productModle.delete(req, (err, data) => {
            if (err) throw err;
            return ResponseSuccess(res, "", data)
        })
    }

    update (req, res)  {
        productModle.update(req, (err, result) => {
            if (err) throw err 
            productModle.getOne(req, null, (err, data) => {
                return ResponseSuccess(res, "", data[0])
            })
        })
    }
}
const ProductController = new ProductControllerClass();
module.exports = {ProductController}
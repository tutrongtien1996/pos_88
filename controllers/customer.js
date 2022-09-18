const {mysqlConnection} = require('../comon/connect.js');
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {customerModle} = require('../modles/customer.js');


class CustomerControllerClass {


    getList (req, res){
        customerModle.getList(req, (err, results) => {
            return res.send(results)
        })
    }

    create (req, res){
        customerModle.create(req, (err, data) => {
            if (err) throw err;
            customerModle.getOne(req, data.insertId, (err, result) => {
                if (err) throw err 
                return res.send(result[0])
            })
        })
    } 

    getOne (req, res) {
        customerModle.getOne(req, null, (err, data) => {
            return res.send(data[0])
        })
    }

    delete (req, res) {
        customerModle.delete(req, (err, data) => {
            if (err) throw err;
            return res.send(data)
        })
    }

    update (req, res)  {
        customerModle.update(req, (err, result) => {
            if (err) throw err 
            customerModle.getOne(req, null, (err, data) => {
                return res.send(data[0])
            })
        })
    }
}
const CustomerController = new CustomerControllerClass();
module.exports = {CustomerController}
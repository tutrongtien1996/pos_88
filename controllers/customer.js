const {mysqlConnection} = require('../comon/connect.js');
const {getID} = require('../helpers/util')
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {customerModle} = require('../modles/customer.js');


class CustomerControllerClass {

    getList (req, res){
        customerModle.getList(req, (err, results) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            return ResponseSuccess(res, "successful", results)
        })
    }

    create (req, res){
        customerModle.create(req, (err, data) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            const input = getID(data.insertId, req.auth_user.company_id);
            return customerModle.getOne(input, (err, result) => {
                if (err) throw err 
                return ResponseSuccess(res, "", result[0])
            })
        })
    } 

    getOne (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id);
        customerModle.getOne(input, (err, result) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            if(result.length > 0){
                return ResponseSuccess(res, "successful", result[0])
            }
            return ResponseFail(res, "unsuccessful")
        })
    }

    delete (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id);
        customerModle.delete(input, (err, data) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            return ResponseSuccess(res, "successful", data)
        })
    }

    update (req, res)  {
        const input = getID(req.params.id, req.auth_user.company_id);
        input.body = req.body;
        customerModle.update(input, (err, data) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            return customerModle.getOne(input, (err, result) => {
                if (err) throw err 
                return ResponseSuccess(res, "", result[0])
            })
        })
    }
}
const CustomerController = new CustomerControllerClass();
module.exports = {CustomerController}
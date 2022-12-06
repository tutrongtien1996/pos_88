const {getID} = require('../helpers/util')
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {customerModel} = require('../models/customer.js');


class CustomerControllerClass {

    getList (req, res){
        customerModel.getList(req, (err, results) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
        
            if(results.length > 0){
                let data = {
                    results: results,
                    count: req.count
                }
                return ResponseSuccess(res, "succesful", data)
            }
            return ResponseSuccess(res, "succesful", [])
        })
    }

    create (req, res){
        customerModel.create(req, (err, data) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            const input = getID(data.insertId, req.auth_user.company_id);
            return customerModel.getOne(input, (err, result) => {
                if (err) throw err 
                return ResponseSuccess(res, "", result[0])
            })
        })
    } 

    getOne (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id);
        customerModel.getOne(input, (err, result) => {
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
        customerModel.delete(input, (err, data) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            return ResponseSuccess(res, "successful", data)
        })
    }

    update (req, res)  {
        const input = getID(req.params.id, req.auth_user.company_id);
        input.body = req.body;
        customerModel.update(input, (err, data) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            return customerModel.getOne(input, (err, result) => {
                if (err) throw err 
                return ResponseSuccess(res, "", result[0])
            })
        })
    }
}
const CustomerController = new CustomerControllerClass();
module.exports = {CustomerController}
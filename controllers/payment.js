const {getID} = require('../helpers/util')
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {paymentModel} = require('../models/payment.js');


class PaymentControllerClass {

    getList (req, res){
        paymentModel.getList(req, (err, results) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
        
            if(results.length > 0){
                return ResponseSuccess(res, "succesful", results)
            }
            return ResponseSuccess(res, "succesful", [])
        })
    }

    createList (req, res){
        req.body.company_id = req.auth_user.company_id;
        paymentModel.createList(req.body, async (err, results) => {
            if(err){
                return ResponseFail(res, "unsuccesful")  
            }
            return ResponseSuccess(res, "succesful", results)    
        })   
    } 

    
}
const PaymentController = new PaymentControllerClass();
module.exports = {PaymentController}
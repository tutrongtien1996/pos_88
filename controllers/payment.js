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

    // getOne (req, res) {
    //     const input = getID(req.params.id, req.auth_user.company_id);
    //     PaymentModel.getOne(input, (err, result) => {
    //         if(err){
    //             return ResponseFail(res, "unsuccesful")
    //         }
    //         if(result.length > 0){
    //             return ResponseSuccess(res, "successful", result[0])
    //         }
    //         return ResponseFail(res, "unsuccessful")
    //     })
    // }

    
}
const PaymentController = new PaymentControllerClass();
module.exports = {PaymentController}
const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {getID} = require('../helpers/util')
const {productModel} = require('../models/product')


class ProductControllerClass { 

    getList (req, res){
        productModel.getList(req, (err, results) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            return ResponseSuccess(res, "successful", results)
        })
       
    }
    create (req, res){
        productModel.create(req, (err, data) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            const input = getID(data.insertId, req.auth_user.company_id);
            
            return productModel.getOne(input, (err, result) => {
                if (err) throw err 
                return ResponseSuccess(res, "successful", result[0])
            })
            return ResponseFail(res, "unsuccesful")
        })
    } 

    getOne (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id)
        productModel.getOne(input, (err, result) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            return ResponseSuccess(res, "successful", result[0])
        })
    }

    delete (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id)
        productModel.delete(input, (err, data) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            return ResponseSuccess(res, "successful", data)
        })
    }

    update (req, res)  {
        productModel.update(req, (err, result) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            const input = getID(req.params.id, req.auth_user.company_id)
            productModel.getOne(input, (err, data) => {
            return ResponseSuccess(res, "successful", data[0])
            })
        })
    }
}
const ProductController = new ProductControllerClass();
module.exports = {ProductController}
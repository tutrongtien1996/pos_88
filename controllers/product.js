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
        productModel.create(req, async (err, data) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            const input = getID(data.insertId, req.auth_user.company_id);
            try {
                let data = await productModel.getOne(input)
                return ResponseSuccess(res, "successful", data)
            } catch (err) {
                return ResponseFail(res, err)
            }
        })
    } 

    async getOne (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id)
        try {
            let data = await productModel.getOne(input)
            return ResponseSuccess(res, "successful", data)
        } catch (err) {
            return ResponseFail(res, err)
        }
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
        productModel.update(req, async (err, result) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            const input = getID(req.params.id, req.auth_user.company_id)
            try {
                let data = await productModel.getOne(input)
                return ResponseSuccess(res, "successful", data)
            } catch (err) {
                return ResponseFail(res, err)
            }
        })
    }
}
const ProductController = new ProductControllerClass();
module.exports = {ProductController}
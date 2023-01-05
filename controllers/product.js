const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {getID} = require('../helpers/util')
const {productModel} = require('../models/product')
const fs = require('fs')
const {validate} = require('../validate/product')



class ProductControllerClass { 

    getList (req, res){
        productModel.getList(req, (err, results) => {
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
        let errors = validate.productRequest(req)
        
        if(Object.keys(errors).length > 0){
            fs.unlink(req.file.path,  function (err, data) {
                if (err) throw err;
            });
            return ResponseFail(res, "unsuccesful", errors)
        }
        if(req.file){
            req.body.image = req.file.path
        }
        else{
            req.body.image = ""
        }
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
            return ResponseSuccess(res, "delete thanh cong", data)
        })
    }

    async update (req, res) {
        const input = getID(req.params.id, req.auth_user.company_id)
        try {
            let data = await productModel.getOne(input)
            
            if(req.file){
                req.body.image = req.file.path
            }
            else{
                req.body.image = ""
            }
            productModel.update(req, async (err, result) => {
                if(err){
                    if(req.file){
                        fs.unlink(req.file.path,  function (err, data) {
                            if (err) throw err;
                        });
                    }
                    return ResponseFail(res, "khong the update", null);
                } 
                if(data.image && (data.image.charAt(8) != "s")){
                    fs.unlink(data.image,  function (err, data) {
                        if (err) throw err;
                    });
                }
                try {
                    let data = await productModel.getOne(input)
                    return ResponseSuccess(res, "successful", data)
                } catch (err) {
                    return ResponseFail(res, err)
                }
            })
            
        } catch (err) {
            if(req.file){
                fs.unlink(req.file.path,  function (err, data) {
                    if (err) throw err;
                });
            }
            return ResponseFail(res, err)
        }
    }
    

    getImage (req, res){
        let imageName = "uploads/products/" + req.params.id;
        fs.readFile(imageName, (err, result) => {
            if(err) {
                return ResponseFail(res, "unsuccesful")
            }
            res.status(200);
            res.setHeader('Content-Type', 'image/jpeg');
            return res.end(result)
            
        })
    }
}
const ProductController = new ProductControllerClass();
module.exports = {ProductController}
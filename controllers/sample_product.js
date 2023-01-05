const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {getID} = require('../helpers/util')
const {sampleProductModel} = require('../models/sample_product')
const {productModel} = require('../models/product')

const fs = require('fs')
const {validate} = require('../validate/product')



class SampleProductControllerClass { 

    getList (req, res){
        sampleProductModel.getList(req, (err, results) => {
            if(err){
                return ResponseFail(res, "unsuccesful")
            }
            if(results.length > 0){
                let data = results;
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
        if(req.body.key == "Abc@1234"){
            return sampleProductModel.create(req, async (err, result) => {
                if(err){
                    return ResponseFail(res, "unsuccesful")  
                }
                try {
                    let data = await sampleProductModel.getOne(result.insertId)
                    return ResponseSuccess(res, "successful", data)
                } catch (err) {
                    return ResponseFail(res, err)
                }
            })
        } 
        return ResponseFail(res, "unsuccesful")   
    }
    

    createMany (req, res){
        req.body.company_id = req.auth_user.company_id;
        sampleProductModel.createMany(req.body, async (err, results) => {
            if(err){
                return ResponseFail(res, "unsuccesful")  
            }
            return ResponseSuccess(res, "succesful", results)    
        })   
    } 

    async getOne (req, res) {
        try {
            let data = await sampleProductModel.getOne(req.params.id)
            return ResponseSuccess(res, "successful", data)
        } catch (err) {
            return ResponseFail(res, err)
        }
    }

    delete (req, res) {
        if(req.body.key == "Abc@1234"){
            return sampleProductModel.delete(req.params.id, (err, data) => {
                if(err){
                    return ResponseFail(res, "unsuccesful")
                }
                return ResponseSuccess(res, "delete thanh cong", data)
            })
        }
        return ResponseFail(res, "unsuccesful")
        
    }

    async update (req, res) {
        if(req.body.key == "Abc@1234"){
            try {
                let data = await sampleProductModel.getOne(req.params.id)
                if(req.file){
                    req.body.image = req.file.path
                }
                else{
                    req.body.image = ""
                }
                return sampleProductModel.update(req, async (err, result) => {
                    if(err){
                        if(req.file){
                            fs.unlink(req.file.path,  function (err, data) {
                                if (err) throw err;
                            });
                        }
                        return ResponseFail(res, "khong the update", null);
                    } 
                    if(data.image){
                        fs.unlink(data.image,  function (err, data) {
                            if (err) throw err;
                        });
                    }
                    try {
                        let data = await sampleProductModel.getOne(req.params.id)
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
        return ResponseFail(res, "khong the update", null);   
    }
}
const SampleProductController = new SampleProductControllerClass();
module.exports = {SampleProductController}
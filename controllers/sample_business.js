const { ResponseSuccess, ResponseFail } = require('../helpers/response.js');
const {getID} = require('../helpers/util')
const {sampleBusinessModel} = require('../models/sample_business')



class SampleBusinessControllerClass { 


    getList (req, res){
        sampleBusinessModel.getList(req, (err, results) => {
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
        if(req.body.key == "Abc@1234"){
            return sampleBusinessModel.create(req.body, async (err, result) => {
                if(err){
                    return ResponseFail(res, "unsuccesful")  
                }
                return ResponseSuccess(res, "successful", result)
            })
        } 
        return ResponseFail(res, "unsuccesful")   
    } 

    getOne (req, res){
        sampleBusinessModel.getOne(req.params.id, async (err, result) => {
            if(err){
                return ResponseFail(res, "unsuccesful")  
            }
            return ResponseSuccess(res, "successful", result)
        })
    }

    update (req, res){
        if(req.body.key == "Abc@1234"){
            req.body.id = req.params.id;
            return sampleBusinessModel.update(req.body, async (err, result) => {
                if(err){
                    return ResponseFail(res, "unsuccesful")  
                }
                return ResponseSuccess(res, "successful", result)
            })
        } 
        return ResponseFail(res, "unsuccesful")   
    }

    delete (req, res){
        if(req.body.key == "Abc@1234"){
            return sampleBusinessModel.delete(req.params.id, async (err, result) => {
                if(err){
                    return ResponseFail(res, "unsuccesful")  
                }
                return ResponseSuccess(res, "successful", result)
            })
        } 
        return ResponseFail(res, "unsuccesful")  
    }
}
const SampleBusinessController = new SampleBusinessControllerClass();
module.exports = {SampleBusinessController}
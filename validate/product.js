const { Validator } = require("../helpers/util");
const { ResponseFail, ResponseSuccess } = require('../helpers/response.js');

const validate = {
    
    productRequest : function (req){
        const errors = {};
        if (Validator.IsEmpty(req.body.name)) {
            errors.name = "Is required";
        }
        if (Validator.IsEmpty(req.body.price)) {
            errors.price = "Is required";
        }
        return errors;
    }
}

module.exports = {validate}
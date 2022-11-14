const { Validator } = require("../helpers/util");

function validateLoginRequest(req) {
    var errors = {};
    if (Validator.IsEmpty(req.body.user_name)) {
        errors.user_name = "Is required";
    }
    if (Validator.IsEmpty(req.body.password)) {
        errors.password = "Is required";
    }
    return errors
}


function validateRegisterRequest(req) {
    var errors = {};
    // if (Validator.IsEmpty(req.body.name)) {
    //     errors.name = "Is required";
    // }
    if (Validator.Maximum(req.body.user_name, 100)) {
        errors.name = "Maximum is 100 characters";
    }
    if (Validator.IsEmpty(req.body.password)) {
        errors.password = "Is required";
    }
    if (Validator.IsEmpty(req.body.user_name)) {
        errors.user_name = "Is required";
    }
    if (Validator.lessLength(req.body.password)){
        errors.password = "Characters > 6 and < 15"
    }
    // if (!Validator.IsEmail(req.body.email)) {
    //     errors.email = "Is invalid email";
    // }
    // if (!Validator.IsPhonenumber(req.body.phone_number)) {
    //     errors.phone_number = "Is invalid phone number";
    // }
    // if (Validator.IsEmpty(req.body.company_id)) {
    //     errors.company_id = "Is required";
    // }
    return errors
}
 


module.exports = {validateLoginRequest, validateRegisterRequest}
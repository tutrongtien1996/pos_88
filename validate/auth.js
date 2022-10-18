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
    if (Validator.IsEmpty(req.body.name)) {
        errors.name = "Is required";
    }
    if (Validator.IsEmpty(req.body.password)) {
        errors.password = "Is required";
    }
    if (Validator.IsEmpty(req.body.password)) {
        errors.user_name = "Is required";
    }
    if (!Validator.IsEmail(req.body.email)) {
        errors.email = "Is invalid email";
    }
    if (Validator.IsEmpty(req.body.company_id)) {
        errors.company_id = "Is required";
    }
    return errors
}

module.exports = {validateLoginRequest, validateRegisterRequest}
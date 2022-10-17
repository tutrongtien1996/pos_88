const { IsEmpty } = require("../helpers/util");

function validateLoginRequest(req, res) {
    var errors = {};
    if (IsEmpty(req.body.user_name)) {
        errors.username = "Is required";
    }
    if (IsEmpty(req.body.password)) {
        errors.password = "Is required";
    }
    return errors
}

module.exports = {validateLoginRequest}
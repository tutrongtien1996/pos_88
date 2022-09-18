const { ResponseFail } = require("./response");
const { CheckToken } = require("./util");

const  Middleware = {
    CheckToken: async function(req, res, next) {
        const checkAuth = await CheckToken(req, res);
        if (!checkAuth) {
            return ResponseFail(res, "Invalid token");
        }
        next()
    }
}

module.exports = {Middleware}
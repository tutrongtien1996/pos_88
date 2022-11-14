const { ResponseFail } = require("./response");
const { CheckToken } = require("./util");

const  Middleware = {
    CheckToken: async function(req, res, next) {
        const checkAuth = await CheckToken(req, res);
        if (!checkAuth) {
            return ResponseFail(res, "Invalid token");
        }
        next()
    },

    Cors: function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    }
}

module.exports = {Middleware}
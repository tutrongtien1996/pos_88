const { ResponseFail } = require("./response");
const {mysqlConnection} = require('../common/connect.js');
var fs = require('fs');

function GenerateStr(len) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < len; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function GetBearerToken(req) {
    let bearerToken = req.header("Authorization");
    if (bearerToken == null) {
    return null
    }
    let tokenArray = bearerToken.split(" ");
    let token = tokenArray.length > 1 ? tokenArray[1] : null;
    return token;
}



async function  CheckToken(req) {
    
    let token = await GetBearerToken(req)
    
    var result = await _getToken(token)
    
    if (result.length > 0) {
        req.auth_user = result[0];
        return true;
    }
    return false;
}

function _getToken(token) {
    return new Promise ((resolve, reject) => {
        const d = new Date();
        function formatNumber(x) {
            x = String(x)
            if(x.length == 2){
                return x;
            }else{
                x = '0'+ x;
                return x;
            }
        }
        d.setDate(d.getDate() - 2);
        let year = d.getFullYear();
        let month = formatNumber(d.getMonth() + 1);
        let date = formatNumber(d.getDate());
        let hour = formatNumber(d.getHours());
        let minute = formatNumber(d.getMinutes());
        let second = formatNumber(d.getSeconds());
        let fullDate = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
        
        
        
        
        let query = `SELECT users.name, users.user_name, token, users.id, users.company_id FROM auths INNER JOIN users ON auths.user_id = users.id WHERE token = '${token}' AND auths.created_at > "${fullDate}" LIMIT 1`;
        
        mysqlConnection.query(query, (err, results) => {
            if(err) throw err
            resolve(results)
        })
    })
}

function getID(id, company_id){
    return  {
        id: id,
        company_id: company_id
    }
}

function setOrder(results){

    var items = [];
    var company = {
        id: results[0].company_id,
        name: results[0].company_name,
        email: results[0].company_email,
        phone_number: results[0].company_phoneNumber,
        logo: results[0].company_logo,
    };
    var customer = {
        id: results[0].customer_id,
        name: results[0].customer_name,
        phone_number: results[0].cutomer_phoneNumber,
        address: results[0].customer_address
    };
    var payment = {
        id: results[0].payment_id,
        name: results[0].payment_name
    }
    results.forEach(item => {
        items.push({
            name: item.product_name,
            quantity: item.orderItiems_quantity,
            price: item.orderItiems_price,
            image: item.product_image
        }); 
    });
    return order = {
        id: results[0].id,
        customer: customer,
        company: company,
        total: results[0].total,
        status: results[0].status,
        payment_method: payment,
        items: items,
        created_at: results[0].created_at,
        updated_at: results[0].updated_at
    }
}

const Validator = {
    IsEmpty: function (value) {
        if (value == undefined || value.length == 0) {
            return true;
        }
        return false;
    },
    IsEmail: function (value) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (pattern.test(value)) {
            return true
        }
        return false
    },
    IsPhonenumber: function (value) {
        var pattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        if (pattern.test(value)) {
            return true
        }
        return false
    },
    Maximum: function (value, max) {
        if (value != undefined) {
            if (value.length > max) {
                return false
            }
        }
        return false;
    },

    lessLength: function (value) {
        if (value.length > 15 || value.length < 6){
            return true
        }
        return false
    }
}
 
function ReadHTMLFile(path, data = {}) {
    var content = fs.readFileSync(path,'utf8').toString();
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            content = content.replace("[["+key+"]]",  data[key])
        }
    }
    return content;
}

module.exports = {GenerateStr,  GetBearerToken, CheckToken, getID, setOrder, Validator, ReadHTMLFile}

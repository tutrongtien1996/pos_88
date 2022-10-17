const { ResponseFail } = require("./response");
const {mysqlConnection} = require('../comon/connect.js');

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
    // Lay token tu header
    let bearerToken = req.header("Authorization");
    if (bearerToken == null) {
    return null
    }
    let tokenArray = bearerToken.split(" ");
    let token = tokenArray.length > 1 ? tokenArray[1] : null;
    return token;
}



async function  CheckToken(req, res, data) {
    
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
        let query = `SELECT users.name, users.user_name, token, users.id, users.company_id FROM auths INNER JOIN users ON auths.user_id = users.id WHERE token = '${token}' LIMIT 1`;

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
        items: items,
        created_at: results[0].created_at,
        updated_at: results[0].updated_at
    }
}


module.exports = {GenerateStr,  GetBearerToken, CheckToken, getID, setOrder}

var mysql = require('mysql');
const dotenv = require('dotenv').config()


var mysqlConnection = mysql.createConnection({
    host: dotenv.parsed.MYSQL_HOST,
    port: dotenv.parsed.MYSQL_PORT,
    user: dotenv.parsed.MYSQL_USER,
    password: dotenv.parsed.MYSQL_PASSWORD,
    database: dotenv.parsed.MYSQL_DATABASE
});

mysqlConnection.connect(function(err){
    if(err){
        console.log({
            host: dotenv.parsed.MYSQL_HOST,
            port: dotenv.parsed.MYSQL_PORT,
            user: dotenv.parsed.MYSQL_USER,
            password: dotenv.parsed.MYSQL_PASSWORD,
            database: dotenv.parsed.MYSQL_DATABASE
        })
        console.log(err)
        console.log("ket noi csdl khong thanh cong")
    }
})

module.exports = { mysqlConnection };
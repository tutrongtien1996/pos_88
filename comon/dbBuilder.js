const dotenv = require('dotenv').config()
const dbBuilder = require('knex')({
    client: 'mysql',
    connection: {
      host : dotenv.parsed.MYSQL_HOST,
      port : dotenv.parsed.MYSQL_PORT,
      user : dotenv.parsed.MYSQL_USER,
      password : dotenv.parsed.MYSQL_PASSWORD,
      database : dotenv.parsed.MYSQL_DATABASE
    }
});


module.exports = { dbBuilder };
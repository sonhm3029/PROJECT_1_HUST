
const Pool= require('pg').Pool;
const db = new Pool({
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  database: process.env.DB,
  password: process.env.DB_PWD,
  port: process.env.DB_PORT,
});


module.exports = db;
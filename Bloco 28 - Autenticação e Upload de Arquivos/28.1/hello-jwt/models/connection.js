const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'renzosev',
  password: 'Sevilha123',
  host: 'localhost',
  database: 'hello_jwt',
});

module.exports = connection;

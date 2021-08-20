import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  user: 'renzosev',
  password: 'Sevilha123',
  host: 'localhost',
  database: 'cep_lookup',
});

export default connection;

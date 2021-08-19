import mysql from 'mysql2';

const connection = mysql.createPool({
  user: 'renzosev',
  password: 'Sevilha123',
  host: 'localhost',
  database: 'users_crud',
});

export default connection;

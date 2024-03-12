import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'jhean',
  password: 'JheanVega9453',
  database: 'admin'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

export default connection;

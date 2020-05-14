const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'remotemysql.com',
  user: '0Un5sZeRRF',
  password: 'QAyAmxkCR6',
  database: '0Un5sZeRRF',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
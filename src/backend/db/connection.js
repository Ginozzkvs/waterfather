// db/connection.js
const mysql = require('mysql');
const util = require('util');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'waterfather'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database.');
});

db.query = util.promisify(db.query);

module.exports = db;

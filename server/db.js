// const fs = require('fs');
const mysql = require('mysql');

let db = {msgs : []};

const con = mysql.createConnection({
  host: 'localhost',
  user: 'some',
  password: 'password',
  database : 'my_db',
});

module.exports = con;
// const con = require('./db.js');

var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://username:password@host:port/database')

const message = {};

db.one('SELECT $1 AS value', 123)
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })

// con.connect(function (err) {
//   if (err) throw err;
//   console.log('Connected!');
//   con.query('CREATE DATABASE IF NOT EXISTS my_db;');
//   con.query('USE my_db');
//   con.query('SHOW TABLES LIKE \'msgs\'', (error, results, fields) => {
//     console.log('here', results);
//     if (!results.length) {
//       con.query('CREATE TABLE msgs (authorId BOOLEAN, content VARCHAR(300), timeStamp BIGINT UNIQUE)');
//     } else {
//       console.log('Msgs already exists');
//     }
//   });
// });

// message.postMsg = function (msg) {
//   let insert = `INSERT IGNORE INTO msgs(authorId, content, timeStamp)
//            VALUES(${msg.authorId}, ${JSON.stringify(msg.content)}, ${msg.timeStamp})`;
//   con.query(insert);  
// };

message.getAll = async function () {
  // return new Promise(function (resolve, reject) {
  //   con.query('SELECT * FROM msgs', (err, results, fields) => {
  //     if (err) reject(err);
  //     resolve(results);
  //   });
  // });
};

module.exports = message;
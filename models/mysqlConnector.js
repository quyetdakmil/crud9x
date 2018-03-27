// // Load module
// var mysql = require('mysql');
// // Initialize pool
// var pool      =    mysql.createPool({
//     host     : '127.0.0.1',
//     user     : 'root',
//     database : 'showbiz',
//     debug    :  false
// });
// module.exports = pool;

// Load module
var mysql = require('mysql');
// Initialize pool
var pool      =    mysql.createPool({
    connectionLimit : 10,
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'bb6b06a917f7fa',
    password : '02f1d5a3',
    database : 'heroku_70544ebd1d8adf0',
    debug    :  false
});
module.exports = pool;
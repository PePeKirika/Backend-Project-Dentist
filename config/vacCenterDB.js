const mysql = require("mysql");

var connection = mysql.createPool({
    host : 'localhost' ,
    user: 'root' ,
    password : 'Poom2548' ,
    database : 'vacCenter' 
});

module.exports = connection ;
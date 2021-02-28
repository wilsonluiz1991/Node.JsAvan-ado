const mysql = require('mysql');

const Database = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "fseletro"
})

module.exports = Database;
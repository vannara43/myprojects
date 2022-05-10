
const mysql = require("mysql");

const db = mysql.createConnection({
    user: "ba56ce10373413",
    password:"41ecc001",
    host: "us-cdbr-east-05.cleardb.net",
    database: "heroku_9916fde28d9809b"
});

module.exports = db;
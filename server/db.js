// const mysql = require("mysql");

// const pool = mysql.createConnection({
//     user: "ba56ce10373413",
//     password:"41ecc001",
//     host: "us-cdbr-east-05.cleardb.net",
//     database: "heroku_9916fde28d9809b"
// });

// module.exports = pool;

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "ba56ce10373413",
    password:"41ecc001",
    host: "us-cdbr-east-05.cleardb.net",
    port: 3306,
    database: "heroku_9916fde28d9809b"
});

module.exports = pool;
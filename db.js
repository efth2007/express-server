const Pool = require('pg').Pool;
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PW,
    port: process.env.PORT,
    ssl: {rejectUnauthorized: false},
});

module.exports = pool;


// const pool = new Pool({
//     user: 'postgres',
//     host: process.env.HOST,
//     database: process.env.DB,
//     password: process.env.PW,
//     port: process.env.PORT,
// });
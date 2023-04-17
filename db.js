const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    database: 'contacts',
    password: '1077892',
    port: 5432,
});

module.exports = pool;
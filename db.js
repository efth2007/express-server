const Pool = require('pg').Pool;

const pool = new Pool({
    user:'postgres',
    host: '0.0.0.0',
    database: 'contacts',
    password: '1077892',
    port: 5432,
});

module.exports = pool;
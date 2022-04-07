const pg = require('pg')

const Pool = pg.Pool;

const pool = new Pool({
    user: 'api_user',
    host: 'localhost',
    database: 'bdcurso',
    password: 'tc3005b',
    port: 5432
})

module.exports = pool

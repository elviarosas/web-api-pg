const pool = require('../config/db.js')

module.exports = {
    getAllUsers : () => {

        sql = 'SELECT * FROM usuario'
        return new Promise( (resolve, reject) => {
            pool.query(sql, (error, results) =>{
                if (error){
                    return reject(error)
                }
                return resolve(results.rows)
            })
        })
    }
}
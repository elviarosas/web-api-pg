const UserServices = require('../services/users.js')

module.exports = {
    getAllUsers : async (req, res, next) => {
        try {
            const users = await UserServices.getAllUsers();
            res.json({users})

        } catch (err){
            res.json({"message": `Erro al obtener los usuarios. Err: ${err}`})
        }
        
    }
}
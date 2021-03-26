const pg = require('pg-promise')
const db = require('db')

class User{
    getAllUsers = ( async(req, res, next) => {
        try{
            const allUsers = await db.any("SELECT * FROM users")
            res.status(200).json({
                allUsers,
                status: "success",
                message: "ALL USERS"
            })
        }catch(err){
            next(err.message)
        }
    })
    getUserById()
    createUser()
    updateUserInfo()
    deleteUserProfile()
}

module.exports = {getAllUsers, getUserById, createUser, updateUserInfo, deleteUserProfile}
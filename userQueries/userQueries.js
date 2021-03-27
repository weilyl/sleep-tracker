const pg = require('pg-promise')
const db = require('../db')
const user = require('../models/userModel.js')

const getAllUsers = ( async(req, res, next) => {
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

const createUser = (async(req, res, next) => {
    try{
    //const newUser = new user(req.params.username, req.params.password, req.params.firstname, req.params.lastname, req.params.DOB)
    const insertUser = await db.none("INSERT INTO users (username, password, firstname, lastname, dob) VALUES (${username}, ${password}, ${firstname}, ${lastname}, ${dob})", req.body)
    res.status(200).json({
        message: "NEW USER CREATED",
        status: "success"
    })
    }catch(err){
        next(err.message)
    }
})

const getUserById = (async (req, res, next) => {
    try{
        const id = req.params.id
        const thisUser = await db.one("SELECT * FROM users where id = $1", id)
        return res.json(thisUser)
    }catch(err) {
        next(err.message)
    }
})
    
const updateUserInfo = (async (req, res, next) => {
    try{
      const id = req.params.id
      await db.none("UPDATE users set username=$1, password=$2 where id = $3", [
          req.body.username,
          req.body.password,
          id
      ]) 
      res.json({
          message: "user updated"
      })
    }catch(err){
        res.status(500).json(err)
    }
})    

const deleteUserProfile = (async (req, res, next) => {
    try{
      const id = parseInt(req.params.id)
      await db.none("delete from users where id = $1", id)
      res.status(200).json({
          message: "user deleted"
      })
    }catch(err){
        req.status(500).json(err)
    }
})
   

module.exports = {
    getAllUsers, createUser, getUserById, updateUserInfo, deleteUserProfile
}
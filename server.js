const express = require("express")
const {getAllUsers, createUser, getUserById, updateUserInfo, deleteUserProfile} = require('./userQueries/userQueries')
const userRouter = require('express').Router()
const db = require('./db')
const user = require('./models/userModel.js')
const dotenv = require('dotenv');
dotenv.config();

const Entry = require('./Models/Entry');
const entry = new Entry();

//Create Express App
const app = express()

//Use Middleware to parse body and read html
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Constant Port Variable
const PORT = process.env.PORT || 3000

//users table Routes
app.get('/users', getAllUsers)
app.get('/user/:id', getUserById)
app.post('/createUser', createUser)
app.patch('/updateUser/:id', updateUserInfo)
app.delete('/deleteUser/:id', deleteUserProfile)


// entries table routes
app.post('/:user_id/new-entry', entry.createEntry);
app.get('/entries/:user_id', entry.getEntries);
app.get('/entry/:id/:user_id', entry.getOneEntry);
app.put('/entry/:id/:user_id', entry.updateEntry);
app.delete('/delete-entry/:id', entry.deleteEntry);


app.listen(PORT, ()=> {
    console.log(`listening on http://localhost:${PORT}`)
})
const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  updateUserInfo,
  deleteUserProfile,
} = require("./userQueries/userQueries");
const userRouter = require("express").Router();
const db = require("./db");
const user = require("./models/userModel.js");
require("dotenv").config();
//Create Express App
const app = express();

//Use Middleware to parse body and read html
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// erwins added this comment here

//Constant Port Variable
const PORT = process.env.PORT || 3000;

//users table Routes
app.get("/users", getAllUsers);
app.get("/user/:id", getUserById);
app.post("/createUser", createUser);
app.patch("/updateUser/:id", updateUserInfo);
app.delete("/deleteUser/:id", deleteUserProfile);

app.listen(PORT, () => {
  console.log(`listenining on http://localhost:${PORT}`);
});

const express = require("express");

const userRouter = express.Router();

const { getUsers, newUser, findUserByEmail } = require("../controllers/user");

userRouter.get("/email/:email", findUserByEmail);

userRouter.get("/", getUsers);

userRouter.post("/register", newUser);

// userRouter.post("/create", createUser);

module.exports = userRouter;

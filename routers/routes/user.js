const express = require("express");

const userRouter = express.Router();

const { getUsers, newUser } = require("../controllers/user");

userRouter.get("/", getUsers);
userRouter.post("/register", newUser);

// userRouter.post("/create", createUser);

module.exports = userRouter;

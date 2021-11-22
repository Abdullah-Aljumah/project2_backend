const express = require("express");

const userRouter = express.Router();

const {
  getUsers,
  newUser,
  findUserByEmail,
  changeName,
} = require("../controllers/user");

userRouter.get("/email/:email", findUserByEmail);

userRouter.get("/", getUsers);

userRouter.post("/register", newUser);
userRouter.put("/name/:email", changeName);

// userRouter.post("/create", createUser);

module.exports = userRouter;

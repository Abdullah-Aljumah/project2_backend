const express = require("express");

const userRouter = express.Router();

const {
  getUsers,
  newUser,
  findUserByEmail,
  changeName,
  changeBio
} = require("../controllers/user");

userRouter.get("/email/:email", findUserByEmail);

userRouter.get("/", getUsers);

userRouter.post("/register", newUser);
userRouter.put("/name/:email", changeName);
userRouter.put("/bio/:email", changeBio);

// userRouter.post("/create", createUser);

module.exports = userRouter;

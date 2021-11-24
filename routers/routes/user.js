const express = require("express");

const userRouter = express.Router();

const {
  getUsers,
  newUser,
  findUserByEmail,
  changeName,
  changeBio,
  favoriteUser,
  removeFavoriteUser,
  favoriteUserTest,
  getFavorite
} = require("../controllers/user");

userRouter.get("/email/:email", findUserByEmail);

userRouter.get("/", getUsers);
userRouter.get("/favorite/:email", getFavorite);
userRouter.post("/register", newUser);
userRouter.put("/name/:email", changeName);
userRouter.put("/bio/:email", changeBio);
userRouter.put("/fav/:email/:name", favoriteUser);
userRouter.put("/removeFav/:email/:_id", removeFavoriteUser);
userRouter.put("/favorite/:email/:ObjectId", favoriteUserTest);

// userRouter.post("/create", createUser);

module.exports = userRouter;

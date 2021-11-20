const express = require("express");
const {
  createCharacter,
  getAllCharacter,
} = require("../controllers/character");

const characterRouter = express.Router();

characterRouter.get("/", getAllCharacter);

characterRouter.post("/create", createCharacter);

module.exports = characterRouter;

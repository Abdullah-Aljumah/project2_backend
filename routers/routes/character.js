const express = require("express");
const {
  createCharacter,
  getAllCharacter,
  getKindCharacter,
  getIdCharacter,
} = require("../controllers/character");

const characterRouter = express.Router();

characterRouter.get("/", getAllCharacter);
characterRouter.get("/:kind", getKindCharacter);
characterRouter.get("/name/:name", getIdCharacter);

characterRouter.post("/create", createCharacter);

module.exports = characterRouter;

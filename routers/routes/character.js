const express = require("express");
const {
  createCharacter,
  getAllCharacter,
  getKindCharacter,
} = require("../controllers/character");

const characterRouter = express.Router();

characterRouter.get("/", getAllCharacter);
characterRouter.get("/:kind", getKindCharacter);

characterRouter.post("/create", createCharacter);

module.exports = characterRouter;

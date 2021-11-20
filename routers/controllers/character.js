const characterModel = require("../../db/models/characterSchema");

const createCharacter = (req, res) => {
  const { name, img, desc, kind, video } = req.body;

  const newCharacter = new characterModel({
    name,
    img,
    desc,
    kind,
    video
  });
  newCharacter
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllCharacter = (req, res) => {
  characterModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { createCharacter, getAllCharacter };

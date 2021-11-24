const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: { type: String },
  img: { type: String },
  desc: { type: String },
  kind: { type: String },
  video: { type: String },
  gif: { type: String },
  voice: { type: String },
  game: { type: String },
  price: { type: String },
});

module.exports = mongoose.model("Character", characterSchema);

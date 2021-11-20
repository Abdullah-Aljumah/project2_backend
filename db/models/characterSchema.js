const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: { type: String },
  img: { type: String},
  desc: { type: String },
  kind: { type: String },
  video: { type: String },
//   gif: { type: String },
});


module.exports = mongoose.model("Character", characterSchema);

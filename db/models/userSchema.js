const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  bio: { type: String },
  favorite: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
});

module.exports = mongoose.model("User", userSchema);

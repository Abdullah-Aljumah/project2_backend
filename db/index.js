const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DB;

const options ={
  useNewUrlParser: true,
  useUnifiedTopoLogy: true,
  }

mongoose.connect(process.env.DB_URI, options).then(() => {
  console.log("DB can be use");
});

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
require("./db/db");
const characterRouter = require("./routers/routes/character");
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

app.use("/character", characterRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

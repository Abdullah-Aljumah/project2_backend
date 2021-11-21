const express = require("express");
const dotenv = require("dotenv");

require("./db");
const characterRouter = require("./routers/routes/character");
const userRouter = require("./routers/routes/user");
const app = express();
dotenv.config();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("/character", characterRouter);

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

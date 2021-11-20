const express = require("express");
const dotenv = require("dotenv");
require("./db/db");
const userRouter = require("./routers/routes/user");
const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

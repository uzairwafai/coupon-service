const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const couponRouter = require("./routes/couponRouter");
require("dotenv").config();

const app = express();

const port = 3000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));

mongoose
  .connect(process.env.MongoDBConnectionString, {})
  .then(() => console.log("connected to Db"))
  .catch((err) => console.error("Error:", err));

app.use(bodyParser.json());
app.use("/", couponRouter);

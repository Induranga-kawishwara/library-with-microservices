const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB).then(() => console.log("connected"));

app.listen(5555, () => {
  console.log("running service");
});

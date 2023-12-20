const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
mongoose.connect(process.env.MONGODB).then(() => console.log("connected"));

app.get("/", (req, res) => {
  res.send("This is our main endpoint !!");
});
app.listen(4545, () => {
  console.log("Up and running -- This is our Book server");
});

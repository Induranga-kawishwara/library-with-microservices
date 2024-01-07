const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
require("./order");
const axios = require("axios");

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB).then(() => console.log("connected"));
const Order = mongoose.model("Order");

app.post("/order", (req, res) => {
  var newOrder = {
    CustomerID: req.body.CustomerID,
    BookID: req.body.BookID,
    GotDate: req.body.GotDate,
    DeliveryDate: req.body.DeliveryDate,
  };

  var order = new Order(newOrder);
  order
    .save()
    .then(() => {
      console.log("Order created with success");
    })
    .catch((err) => {
      throw err;
    });
});

app.get("/orders", (req, res) => {
  Order.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      throw err;
    });
});

app.get("/order/:id", (req, res) => {
  Order.findById(req, params.id).then((order) => {
    if (order) {
      axios
        .get("http://localhost:3535/customer/" + order.CustomerID)
        .then((res) => {
          var orderObject = { customrName: res.data.name };
          res.json(orderObject);
        });
      res.send("sucess");
    } else {
      res.send("Invalid");
    }
  });
});

app.listen(5555, () => {
  console.log("running service");
});

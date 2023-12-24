const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("./customer");

const app = express();
app.use(bodyParser.json());
require("dotenv").config();

const customers = mongoose.model("customers");
mongoose.connect(process.env.MONGODB).then(() => console.log("connected"));

app.post("/customer", (req, res) => {
  var newCustomer = {
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };
  var customer = new customers(newCustomer);
  customer
    .save()
    .then(() => {
      console.log("new customer added");
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
  res.send("yoyo added");
});
app.get("/customers", (req, res) => {
  customers
    .find()
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});
app.get("/customer/:id", (req, res) => {
  customers
    .findById(req.params.id)
    .then((customer) => {
      if (customer) {
        res.json(customer);
      } else {
        res.send("wrong id");
      }
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});
app.listen(3535, () => {
  console.log("Up and running -- This is our customer server");
});

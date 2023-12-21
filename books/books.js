const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
require("./book");
const Book = mongoose.model("Book");

mongoose.connect(process.env.MONGODB).then(() => console.log("connected"));

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("This is our main endpoint !!");
});

app.post("/book", (req, res) => {
  var newBook = {
    title: req.body.title,
    author: req.body.author,
    numberPage: req.body.numberPage,
    publisher: req.body.publisher,
  };
  var book = new Book(newBook);
  book
    .save()
    .then(() => {
      console.log("new book added");
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
  res.send("yoyo added");
});
app.get("/books", (req, res) => {
  Book.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.get("/book/:id/", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      if (book) {
        res.json(book);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

app.listen(4545, () => {
  console.log("Up and running -- This is our Book server");
});

const mongoose = require("mongoose");

mongoose.model("Order", {
  CustomerID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  BookID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  GotDate: {
    type: Date,
    required: true,
  },
  DeliveryDate: {
    type: Date,
    required: true,
  },
});

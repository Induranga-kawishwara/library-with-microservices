const mongoose = require("mongoose");

mongoose.model("Order", {
  CustomerID: {
    type: mongoose.SchemaType.ObjectId,
    require: true,
  },
  BookID: {
    type: mongoose.SchemaType.ObjectId,
    require: true,
  },
  GotDate: {
    type: Date,
    require: true,
  },
  DeliveryDate: {
    type: Date,
    require: true,
  },
});

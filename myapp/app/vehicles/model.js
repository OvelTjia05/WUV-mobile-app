const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nameCategory: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true,
  },
});

const Vehicle = mongoose.model("Vehicle", userSchema);

module.exports = Vehicle;

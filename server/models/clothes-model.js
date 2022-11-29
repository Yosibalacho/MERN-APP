const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Clothes = new Schema({
  _id: String,
  type: String,
  gender: String,
  brand: String,
  model: String,
  price: Number,
  quantity: Number,
  isShort: Boolean,
  isDryFit: Boolean,
  img: String,
});

module.exports = mongoose.model("Clothes", Clothes);

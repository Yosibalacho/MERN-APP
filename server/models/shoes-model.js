const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Shoes = new Schema({
  _id: String,
  type: String,
  brand: String,
  model: String,
  price: Number,
  quantity: Number,
  isOnSale: Boolean,
  img: String,
});

module.exports = mongoose.model("Shoes", Shoes);

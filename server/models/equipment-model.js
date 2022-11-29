const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Equipment = new Schema({
  _id: String,
  sport_type: String,
  product: String,
  brand: String,
  price: Number,
  quantity: Number,
  img: String,
});

module.exports = mongoose.model("Equipment", Equipment);

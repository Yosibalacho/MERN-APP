const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Teams = new Schema({
  _id: String,
  name: String,
});

module.exports = mongoose.model("Teams", Teams);

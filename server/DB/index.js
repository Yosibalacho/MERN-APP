const mongoose = require("mongoose");

const users_db = process.env.USERS_DB;

mongoose
  .connect(users_db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((error) => {
    console.error("Connection failed", error.message);
  });
const db = mongoose.connection;
module.exports = db;

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
require("./DB/index");
// const passport = require("passport");
// require("./config/passport")(passport);
const app = express();
const clothesRouter = require("./routes/clothes-router");
const equipmentRouter = require("./routes/equipment-router");
const shoesRouter = require("./routes/shoes-router");
const teamsRouter = require("./routes/teams-router");
const port = 2020;
// app.use(passport.initialize());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use("/adidas",passport.authenticate("jwt",{session:false}), clothesRouter);
app.use("/clothes", clothesRouter);
app.use("/equipment", equipmentRouter);
app.use("/shoes", shoesRouter);
app.use("/teams", teamsRouter);
app.get("/", (req, res) => {
  res.send({ massage: "success 2020" });
});
app.listen(port, () => {
  console.log(`server listen on port: ${port}`);
});

if (process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname,'../client/build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/build','index.html'))
  })
}
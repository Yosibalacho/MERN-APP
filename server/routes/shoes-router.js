const router = require("express").Router();
const {
  createShoes,
  deleteShoes,
  getShoes,
  getShoesById,
  updateShoes,
} = require("../controllers/shoes-ctrl");
router.get("/", getShoes);
router.get("/getById/:id", getShoesById);
router.post("/create", createShoes);
router.put("/update/:id", updateShoes);
router.delete("/delete/:id", deleteShoes);

module.exports = router;

const router = require("express").Router();
const {
  createClothes,
  deleteClothes,
  getClothes,
  getClothesById,
  updateClothes,
} = require("../controllers/clothes-ctrl");
router.get("/", getClothes);
router.get("/getById/:id", getClothesById);
router.post("/create", createClothes);
router.put("/update/:id", updateClothes);
router.delete("/delete/:id", deleteClothes);

module.exports = router;

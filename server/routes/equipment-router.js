const router = require("express").Router();
const {
  createEquipment,
  deleteEquipment,
  getEquipment,
  getEquipmentById,
  updateEquipment,
} = require("../controllers/equipment-ctrl");
router.get("/", getEquipment);
router.get("/getById/:id", getEquipmentById);
router.post("/create", createEquipment);
router.put("/update/:id", updateEquipment);
router.delete("/delete/:id", deleteEquipment);

module.exports = router;

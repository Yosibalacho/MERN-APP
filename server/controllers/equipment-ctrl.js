const equipmentModel = require("../models/equipment-model");

const getEquipment = async (req, res) => {
  await equipmentModel.find({}).then((equipment, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (equipment.length == 0) {
      return res.json({ success: false, message: "no equipment" });
    }
    res.status(200).json({ success: true, equipment });
  });
};
const createEquipment = async (req, res) => {
  await equipmentModel
    .insertMany(req.body.equipment)
    .then(() =>
      res
        .status(300)
        .json({ success: true, message: "equipment added successfully" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};
const getEquipmentById = async (req, res) => {
  await equipmentModel
    .findById(req.params.id)
    .then((equipment) => {
      if (!equipment) {
        return res.json({
          success: false,
          message: "equipment is not available",
        });
      }
      return res.status(200).json({ success: true, equipment });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};
const updateEquipment = async (req, res) => {
  await equipmentModel
    .findByIdAndUpdate(req.params.id, req.body.equipment)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) => res.status(400).json({ success: false, error }));
};
const deleteEquipment = (req, res) => {};

module.exports = {
  getEquipment,
  deleteEquipment,
  updateEquipment,
  getEquipmentById,
  createEquipment,
};

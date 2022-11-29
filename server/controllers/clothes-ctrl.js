const clothesModel = require("../models/clothes-model");

const getClothes = async (req, res) => {
  await clothesModel.find({}).then((clothes, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (clothes.length == 0) {
      return res.json({ success: false, message: "no clothes" });
    }
    res.status(200).json({ success: true, clothes });
  });
};
const createClothes = async (req, res) => {
  await clothesModel
    .insertMany(req.body.clothes)
    .then(() =>
      res
        .status(300)
        .json({ success: true, message: "clothes added successfully" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};
const getClothesById = async (req, res) => {
  await clothesModel
    .findById(req.params.id)
    .then((clothes) => {
      if (!clothes) {
        return res.json({
          success: false,
          message: "clothes is not available",
        });
      }
      return res.status(200).json({ success: true, clothes });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};
const updateClothes = async (req, res) => {
  await clothesModel
    .findByIdAndUpdate(req.params.id, req.body.clothes)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) => res.status(400).json({ success: false, error }));
};
const deleteClothes = (req, res) => {
  
};

module.exports = {
  getClothes,
  deleteClothes,
  updateClothes,
  getClothesById,
  createClothes,
};

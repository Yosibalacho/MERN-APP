const shoesModel = require("../models/shoes-model");

const getShoes = async (req, res) => {
  await shoesModel.find({}).then((shoes, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (shoes.length == 0) {
      return res.json({ success: false, message: "no shoes" });
    }
    res.status(200).json({ success: true, shoes });
  });
};
const createShoes = async (req, res) => {
  await shoesModel
    .insertMany(req.body.shoes)
    .then(() =>
      res
        .status(200)
        .json({ success: true, message: "shoes added successfully" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};
const getShoesById = async (req, res) => {
  await shoesModel
    .findById(req.params.id)
    .then((shoes) => {
      if (!shoes) {
        return res.json({
          success: false,
          message: "shoes is not available",
        });
      }
      return res.status(200).json({ success: true, shoes });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};
const updateShoes = async (req, res) => {
  await shoesModel
    .findByIdAndUpdate(req.params.id, req.body.shoes)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) => res.status(400).json({ success: false, error }));
};
const deleteShoes = (req, res) => {};

module.exports = {
  getShoes,
  createShoes,
  deleteShoes,
  updateShoes,
  getShoesById,
};

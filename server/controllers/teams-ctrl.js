const teamsModel = require("../models/teams-model");

const getTeams = async (req, res) => {
  await teamsModel.find({}).then((teams, error) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    if (teams.length == 0) {
      return res.json({ success: false, message: "no teams" });
    }
    res.status(200).json({ success: true, teams });
  });
};
const createTeams = async (req, res) => {
  await teamsModel
    .insertMany(req.body.teams)
    .then(() =>
      res
        .status(300)
        .json({ success: true, message: "teams added successfully" })
    )
    .catch((error) => res.status(400).json({ success: false, error }));
};
const getTeamsById = async (req, res) => {
  await teamsModel
    .findById(req.params.id)
    .then((teams) => {
      if (!teams) {
        return res.json({
          success: false,
          message: "teams is not available",
        });
      }
      return res.status(200).json({ success: true, teams });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};
const updateTeams = async (req, res) => {
  await teamsModel
    .findByIdAndUpdate(req.params.id, req.body.teams)
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((error) => res.status(400).json({ success: false, error }));
};
const deleteTeams = (req, res) => {};

module.exports = {
  getTeams,
  createTeams,
  deleteTeams,
  getTeamsById,
  updateTeams,
};

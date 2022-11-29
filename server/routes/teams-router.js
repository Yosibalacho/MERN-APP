const router = require("express").Router();
const {
  createTeams,
  deleteTeams,
  getTeams,
  getTeamsById,
  updateTeams,
} = require("../controllers/teams-ctrl");
router.get("/", getTeams);
router.get("/getById/:id", getTeamsById);
router.post("/create", createTeams);
router.put("/update/:id", updateTeams);
router.delete("/delete/:id", deleteTeams);

module.exports = router;

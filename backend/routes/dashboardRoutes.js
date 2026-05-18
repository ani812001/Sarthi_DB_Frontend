const router = require("express").Router();

const { getDashboardData } = require("../controllers/dashboardController");

router.get("/", getDashboardData);

module.exports = router;

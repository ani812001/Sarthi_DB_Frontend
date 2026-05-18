const router = require("express").Router();

const { getInstitutes } = require("../controllers/instituteController");

router.get("/", getInstitutes);

module.exports = router;

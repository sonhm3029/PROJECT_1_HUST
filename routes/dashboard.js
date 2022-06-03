const express = require("express");
const router = express.Router();
const DashboardController = require("../controllers/DashboardController");
const Authorization = require("../middleware/Authorization");

router.get("/", Authorization.verify,DashboardController.render);

module.exports = router;

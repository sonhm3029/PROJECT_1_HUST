const express = require("express");
const VisualizeController = require("../controllers/VisualizeController");

const router = express.Router();


router.get("/visualize-all", VisualizeController.renderAll);
router.get("/visualize-one", VisualizeController.renderOne);


module.exports = router;

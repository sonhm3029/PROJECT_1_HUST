const DownloadController = require("../controllers/DownloadController");
const router = require("express").Router();

router.get("/", DownloadController.download);

module.exports = router;

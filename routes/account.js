const router = require('express').Router();
const AccountController = require("../controllers/AccountController");

router.get("/admin", AccountController.renderAdmin);
router.get("/members", AccountController.renderMember);

module.exports = router;

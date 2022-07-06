const router = require('express').Router();
const UsersController = require("../controllers/UsersController");

router.get('/', UsersController.renderListMembers);

module.exports = router;

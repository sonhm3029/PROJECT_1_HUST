const router = require('express').Router();
const EventController = require("../controllers/EventController");

router.get('/',EventController.render );


module.exports = router;
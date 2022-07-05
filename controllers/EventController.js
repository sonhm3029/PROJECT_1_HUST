class EventController {

    render(req, res, next) {
        res.render('event_management');
    }

}

module.exports = new EventController;

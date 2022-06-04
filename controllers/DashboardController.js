class DashboardController {

    render(req, res, next) {
        res.render('dashboard');
    }
    
};

module.exports = new DashboardController;

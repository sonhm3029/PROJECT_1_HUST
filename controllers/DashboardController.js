const cronJob = require("../service/schedules");
const s3 = require("../service/aws/s3");

class DashboardController {
  render(req, res, next) {
    res.render("dashboard");
  }
}

module.exports = new DashboardController();

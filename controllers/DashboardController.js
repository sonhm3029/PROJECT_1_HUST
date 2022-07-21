const cronJob = require("../service/schedules");
const s3 = require("../service/aws/s3");
const moment = require("moment-timezone");

class DashboardController {
  render(req, res, next) {
    let fileName = `${moment().tz("Asia/Ho_Chi_Minh").format("YYYY-MM-DD")}.json`;
    console.log(fileName);
    var getParams = {
      Bucket:process.env.AWS_BUCKET_NAME,
      // Key:fileName
      Prefix:"visualize/"
    }
    s3.listObjects(getParams, (err, data) => {
      if(err) {
        console.log(err);
      }
      else {
        console.log(data);
        // console.log(JSON.parse(data.Body.toString()));
      }
    })
    res.render("dashboard");
  }
}

module.exports = new DashboardController();

const s3 = require("../service/aws/s3");
const { BucketParams } = require("../utils/index");

class DownloadController {
  async download(req, res, next) {
    var fileName = req.query.fileName;
    res.attachment(fileName);
    try {
      var fileStream = s3
        .getObject(BucketParams({ Key: fileName }))
        .createReadStream();
      fileStream.pipe(res);
    } catch (error) {
      res.send("Error");
    }
  }
}

module.exports = new DownloadController();

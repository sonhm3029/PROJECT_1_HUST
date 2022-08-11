const s3 = require("../service/aws/s3");
const moment = require("moment");

const BucketParams = function ({ ...params }) {
  return {
    Bucket: process.env.AWS_BUCKET_NAME,
    ...params,
  };
};

const getFileData = async function (fileName) {
  return new Promise((resolve, reject) => {
    s3.getObject(BucketParams({ Key: fileName }), (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data.Body.toString()));
      }
    });
  });
};

const processingLineChartData = (data) => {
  let flattenData = Object.values(data).flat();
  let uniqueTimePoints = [...new Set(flattenData?.map((item) => item?.Time))];
  let dataChart = uniqueTimePoints?.map((timePoint) => {
    let time = new Date(timePoint);
    let value = flattenData?.filter((item) => item?.Time === timePoint).length;
    return [timePoint, value];
  });
  let detailData = uniqueTimePoints?.map((timePoint) => ({
    timePoint,
    objectDetect: flattenData
      ?.filter((item) => item?.Time === timePoint)
      ?.map((data) => data?.Name)
      ?.join(", "),
  }));
  return [dataChart, detailData];
};

class VisualizeController {
  async renderAll(req, res, next) {
    const currentTime = moment().hour();
    const currentMinute = moment().minute();
    let todayFileName =
      currentTime > 6 || (currentTime == 6 && currentMinute > 30)
        ? `visualize/${moment().format("YYYY-MM-DD")}.json`
        : `visualize/${moment().subtract(1, "days").format("YYYY-MM-DD")}.json`;
    if (req?.query?.date) {
      todayFileName = `visualize/${req?.query?.date}.json`;
    }
    let todayLineChartData = await getFileData(todayFileName);
    var detailData;
    [todayLineChartData, detailData] =
      processingLineChartData(todayLineChartData);
    res.render("datavisualizeall", {
      todayLineChartData: JSON.stringify(todayLineChartData),
      detailData,
      today: moment().format("YYYY-MM-DD"),
      currentChoseDate: req?.query?.date || moment().format("YYYY-MM-DD"),
    });
  }

  renderOne(req, res, next) {
    res.render("datavisualizeone");
  }
}

module.exports = new VisualizeController();

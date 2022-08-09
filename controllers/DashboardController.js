const cronJob = require("../service/schedules");
const s3 = require("../service/aws/s3");
const moment = require("moment-timezone");
const membersModel = require("../database/members");
const { studyFields } = require("../constants");
const db = require("../database");

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
        resolve(data);
      }
    });
  });
};

const processingFieldData = (listFieldsData) => {
  let flattenListFieldsData = listFieldsData
    ?.map((item) => item?.studyfields)
    .flat();
  const result = studyFields.map((item) => ({
    name: item.label,
    value: flattenListFieldsData?.filter((value) => value === item?.value)
      .length,
  }));
  return result;
};

const processingLineChartData = (data) => {
  data = data?.map((fileData) => {
    let flattenData = Object.values(fileData).flat();
    let uniqueTimePoints = [...new Set(flattenData?.map((item) => item?.Time))];
    let result = uniqueTimePoints?.map((timePoint) => {
      let time = new Date(timePoint);
      let value = flattenData?.filter(
        (item) => item?.Time === timePoint
      ).length;
      return [timePoint, value];
    });
    return result;
  });
  return data.flat();
};

class DashboardController {
  async render(req, res, next) {
    let currentMonth = new Date().getMonth() + 1;

    // Get data Các lĩnh vực nghiên cứu
    const listFieldsData = await db.query(
      membersModel.search({
        field: ["studyfields"],
      })
    );
    const dataPieChart = processingFieldData(listFieldsData?.rows);

    // Get data tan suat ra vao lab trong thang
    s3.listObjects(BucketParams({ Prefix: "visualize/" }), (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const listFileCurrentMonth = data?.Contents?.filter(
          (item) => item?.Key?.slice(16, 17) === `${currentMonth}`
        );
        Promise.all(listFileCurrentMonth?.map((item) => getFileData(item?.Key)))
          .then((result) => {
            let dataLineChart = result?.map((item) =>
              JSON.parse(item?.Body.toString())
            );
            dataLineChart = processingLineChartData(dataLineChart);
            res.render("dashboard", {
              dataLineChart: JSON.stringify(dataLineChart),
              dataPieChart: JSON.stringify(dataPieChart),
            });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  }
}

module.exports = new DashboardController();

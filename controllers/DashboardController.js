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
  let flattenDataAll = data
    ?.map((fileData) => Object.values(fileData).flat())
    .flat();
  let lineChartData = data?.map((fileData) => {
    let flattenData = Object.values(fileData).flat();
    // Calculate data for line chart
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
  // Calculate top in-out-lab
  let dataInOutLab = [
    ...new Set(flattenDataAll?.map((item) => item?.Name)),
  ]?.map((member) => ({
    name: member,
    valueCount: flattenDataAll?.filter((item) => item?.Name === member)?.length,
    lastInOutLab: Math.max(
      ...flattenDataAll
        ?.filter((item) => item?.Name === member)
        ?.map((data) => +new Date(data?.Time))
    ),
  }));
  let topTenInOutLab = dataInOutLab
    ?.sort((item1, item2) => {
      // Sort desc
      return item2?.valueCount - item1?.valueCount;
    })
    ?.slice(0, 10);
  return [lineChartData.flat(), topTenInOutLab];
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
    // Get data tổng thành viên
    const totalMembers = Number(
      (
        await db.query(
          membersModel.count({
            field: ["id"],
          })
        )
      )?.rows[0]?.total
    );
    // Số thành viên hoạt động
    // Số các khóa training
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
            var topTenInOutLab;
            [dataLineChart, topTenInOutLab] =
              processingLineChartData(dataLineChart);
            topTenInOutLab = topTenInOutLab?.map((item) => ({
              ...item,
              lastInOutLab: moment(item?.lastInOutLab)?.format(
                "DD-MM-YYYY HH:mm:ss"
              ),
            }));
            console.log(topTenInOutLab);
            // Số lượt ra vào lab:
            let totalNumberInOut = dataLineChart?.reduce(
              (total, item) => total + item[1],
              0
            );
            // Top ra vào lab
            res.render("dashboard", {
              dataLineChart: JSON.stringify(dataLineChart),
              dataPieChart: JSON.stringify(dataPieChart),
              totalMembers,
              totalNumberInOut,
              topTenInOutLab
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

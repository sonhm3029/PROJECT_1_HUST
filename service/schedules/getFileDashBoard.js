const schedule = require("node-schedule");
const AccountModel = require("../../database/account");
const db = require("../../database");
const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");
const s3 = require("../aws/s3");

let cronExpress = { hour: 23, minute: 30 };
// let cronExpress = "*/3* * * * *";

const formatNumber = (value) => {
  if (Number(value) < 10) {
    return `0${value}`;
  }
  return `${value}`;
};

const getFileId = async (service, fireDate) => {
  try {
    var todayFile = fireDate
      .toLocaleDateString()
      .split("/")
      ?.map((item) => formatNumber(item));
    todayFile = `${todayFile[2]}-${todayFile[0]}-${todayFile[1]}.json`;
    let res = await service.files.list({
      q: "parents='1SKMy1V4PQZtX4UsbC-IZpi7sm_Bda4EJ'",
    });

    let fileArr = res?.data?.files;
    let newFile = fileArr?.filter((item) => item?.name === todayFile);
    if (newFile?.length > 0) {
      return newFile[0]?.id;
    }
  } catch (err) {
    console.log(err);
  }
};

const processingData = (data) => {
  console.log(data);
  return data;
};

const job = {
  run: () => {
    console.log("Read files from google drive service is running...");
    let cronjob = schedule.scheduleJob(cronExpress, async (fireDate) => {
      const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        "https://developers.google.com/oauthplayground"
      );
      oauth2Client.setCredentials({
        access_token: process.env.ACCESS_TOKEN,
        refresh_token: process.env.REFRESH_TOKEN,
        expiry_date: true,
      });
      const service = google.drive({
        version: "v3",
        auth: oauth2Client,
        scopes: [
          "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly",
          "https://www.googleapis.com/auth/drive.appdata",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/drive.metadata",
          "https://www.googleapis.com/auth/drive.metadata.readonly",
          "https://www.googleapis.com/auth/drive.photos.readonly",
          "https://www.googleapis.com/auth/drive.readonly",
        ],
      });

      let fileId = await getFileId(service, fireDate);
      let { data } = await service.files.get({
        alt: "media",
        fileId: fileId,
      });
      //   data = processingData(data);

      var todayFile = new Date()
        .toLocaleDateString()
        .split("/")
        ?.map((item) => formatNumber(item));
      todayFile = `${todayFile[2]}-${todayFile[0]}-${todayFile[1]}.json`;
      let buf = Buffer.from(JSON.stringify(data));
      let uploadData = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: todayFile,
        Body: buf,
        ContentEncoding: "base64",
        ContentType: "application/json",
      };
      console.log('cron job is fun');
      s3.upload(uploadData, function (err, data) {
        if (err) {
          console.log(err);
          console.log("Error uploading data: ", data);
        } else {
          console.log("succesfully uploaded!!!");
        }
      });
      console.log("cron job is ok")
    });
  },
};
module.exports = job;

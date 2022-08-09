const { response } = require("express");
const accountModel = require("../database/account");
const db = require("../database/index");
const jwt = require("jsonwebtoken");
// const fs = require("fs");
// const readline = require("readline");
// const { google } = require("googleapis");
// const SCOPES = ["https://www.googleapis.com/auth/drive.metadata.readonly"];
// const TOKEN_PATH = "token.json";
const { GoogleAuth } = require("google-auth-library");
const { google } = require("googleapis");
const { number } = require("prop-types");
const s3 = require("../service/aws/s3");

const formatNumber = (value) => {
  if (Number(value) < 10) {
    return `0${value}`;
  }
  return `${value}`;
};

class LoginController {
  render(req, res, next) {
    res.render("login", { title: "Hello there", layout: false, isAuth: false });
  }
  async login(req, res, next) {
    let { username, password } = req?.body;
    console.log(req?.body);
    try {
      let data = await db.query(
        accountModel.search({
          field: ["password", "id"],
          condition: "username=$1",
        }),
        [username]
      );
      if (data?.rows?.length > 0 && data?.rows[0]?.password === password) {
        let token = jwt.sign(
          { username, password },
          process.env.JSON_PRIVATEKEY
        );
        res.cookie("auth_token", token);
        res.redirect("/dashboard");
      } else {
        res.render("login", {
          layout: false,
          notiObj: {
            message: "Your username or password Incorrect, please try again!",
            type: "error",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  logout(req, res, next) {
    res.clearCookie("auth_token");
    res.redirect("/login");
  }

  async test(req, res, next) {
    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
      // "http://localhost:5000/oauth2callback"
      //  '1//04X94w7Qc_7FxCgYIARAAGAQSNwF-L9IrLH19LhskuPCi-dG3sCk6q_3-JzhsfJawtmtJPilvCWv-KRos1GkjejDMJPeSyNLkYcE'
    );
    // const scopes = [
    //   "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.readonly",
    //   "https://www.googleapis.com/auth/drive.appdata",
    //   "https://www.googleapis.com/auth/drive.file",
    //   "https://www.googleapis.com/auth/drive.metadata",
    //   "https://www.googleapis.com/auth/drive.metadata.readonly",
    //   "https://www.googleapis.com/auth/drive.photos.readonly",
    //   "https://www.googleapis.com/auth/drive.readonly",
    // ];
    // const url = oauth2Client.generateAuthUrl({
    //   // 'online' (default) or 'offline' (gets refresh_token)
    //   access_type: "offline",

    //   // If you only need one scope you can pass it as a string
    //   scope: scopes,
    //   prompt: 'consent'
    // });
    // console.log(url)
    // const data = await oauth2Client.getToken('4/0AdQt8qjtC0Z7_4hnKDdybVTwaIfJilGoQkLaqioxkk2LT-FgrMfxC3wBxOQAXQSOswZBGA');
    // console.log(data);
    // console.log(tokens);
    // console.log(tokens);
    // console.log(tokens);
    // oauth2Client.setCredentials(tokens);
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
    try {
      var todayFile = new Date()
        .toLocaleDateString()
        .split("/")
        ?.map((item) => formatNumber(item));
      todayFile = `${todayFile[2]}-${todayFile[0]}-${todayFile[1]}.json`;
      service.files
        .list({
          q: "parents='1SKMy1V4PQZtX4UsbC-IZpi7sm_Bda4EJ'",
        })
        .then((res) => {
          let fileArr = res?.data?.files;
          let newFile = fileArr?.filter((item) => item?.name === todayFile);
          if (newFile.length > 0) {
            let fileId = newFile[0].id;
            console.log(fileId);

            req.googleDrive = { fileId, service };
            next();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      // TODO(developer) - Handle error
      throw err;
    }
  }
  async findFile(req, res, next) {
    let { fileId, service } = req.googleDrive;
    service.files
      .get({
        alt: "media",
        fileId: fileId,
      })
      .then((response) => {
        let data = response.data;
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
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new LoginController();

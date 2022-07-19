const AWS = require("aws-sdk");
AWS.config.update({
  region: "ap-southeast-1",
});
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

module.exports = s3;
const express = require("express");
// Use middleware

const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

module.exports = function (app) {
  if (process.env.NODE_ENV === "development") {
    const morgan = require("morgan");
    app.use(morgan("combined"));
  }
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(cookieParser());
};

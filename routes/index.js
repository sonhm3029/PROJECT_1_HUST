const express = require("express");
const login = require("./login");

module.exports = function (app) {
  app.get("/", (req, res, next) => {
    res.render("index");
  });

  
  app.use("/login", login);
  app.use(function (req, res, next) {
    res.status(404);

    if (req.accepts("html")) {
      res.render("NotFound", { layout:false,url: req.url });
      return;
    }
  });
};

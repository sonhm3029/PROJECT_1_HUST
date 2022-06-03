const express = require("express");
const login = require("./login");
const dashboard = require("./dashboard");

module.exports = function (app) {
  app.get("/", (req, res, next) => {
    res.send("Hello world");
  });

  
  app.use("/login", login);
  app.use("/dashboard", dashboard);
  app.use(function (req, res, next) {
    res.status(404);

    if (req.accepts("html")) {
      res.render("NotFound", { layout:false,url: req.url });
      return;
    }
  });
};

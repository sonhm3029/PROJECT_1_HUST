const express = require("express");
const login = require("./login");
const dashboard = require("./dashboard");
const logout = require("./logout");
const visualize = require("./visualize");

module.exports = function (app) {

  app.get("/", (req, res, next) => {
    res.redirect("/dashboard");
  })
  app.use("/visualize", visualize);
  app.use("/dashboard", dashboard);
  app.use("/login", login);
  app.use("/logout", logout);
  app.use(function (req, res, next) {
    res.status(404);

    if (req.accepts("html")) {
      res.render("NotFound", { layout:false,url: req.url });
      return;
    }
  });
};

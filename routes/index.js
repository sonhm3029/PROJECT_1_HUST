const express = require("express");
const login = require("./login");
const dashboard = require("./dashboard");
const logout = require("./logout");
const visualize = require("./visualize");
const events = require("./events");
const users = require("./members");
const Authorization = require("../middleware/Authorization");

module.exports = function (app) {
  app.get("/", (req, res, next) => {
    res.redirect("/dashboard");
  })
  app.use("/visualize", Authorization.verify,visualize);
  app.use("/dashboard", Authorization.verify,dashboard);
  app.use('/events', Authorization.verify,events);
  app.use("/members", Authorization.verify,users);
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

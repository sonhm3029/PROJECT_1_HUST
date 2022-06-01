const express = require('express');
const login = require("./login");

module.exports = function( app) {
    app.get("/", (req, res, next) => {
        res.render('index');
    })

    app.use("/login", login);

}

const express = require('express');

module.exports = function( app) {
    app.get("/", (req, res, next) => {
        res.render('index');
    })

}

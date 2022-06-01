const express = require('express');
// Use middleware

const morgan = require("morgan");
const cors = require('cors');
const bodyParser = require('body-parser')

module.exports = function(app) {
    app.use(morgan('combined'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static('public'));
}


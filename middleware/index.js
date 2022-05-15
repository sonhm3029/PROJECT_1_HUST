const express = require('express');
// Use middleware

const morgan = require("morgan");
const cors = require('cors');

module.exports = function(app) {
    app.use(morgan('combined'));
    app.use(cors());
    app.use(express.json());
    app.use(express.static('public'));
}


const db = require("./index");
const method = require("../query");

const membersModel = {
    ...method('users')
};

module.exports = membersModel;

const db = require("./index");
const method = require("../query");

const accountModel = {
    ...method('account')
};

module.exports = accountModel;

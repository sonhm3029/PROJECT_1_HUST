const { RDS } = require("aws-sdk");
const accountModel = require("../database/account");

class AccountController {
  async renderAdmin(req, res, next) {
    res.render("account_management_admin");
  }

  async renderMember(req, res, next) {
    res.render("account_management_member");
  }
}

module.exports = new AccountController();

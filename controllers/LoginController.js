const { response } = require("express");
const accountModel = require("../database/account");
const db = require("../database/index");
const jwt = require("jsonwebtoken");

class LoginController {
  render(req, res, next) {
    res.render("login", { title: "Hello there", layout: false, isAuth: false });
  }
  async login(req, res, next) {
    let { username, password } = req?.body;
    console.log(req?.body);
    try {
      let data = await db.query(
        accountModel.search({
          table: "account",
          field: ["password", "id"],
          condition: "username=$1",
        }),
        [username]
      );
      if (data?.rows?.length > 0 && data?.rows[0]?.password === password) {
        let token = jwt.sign(
          { username, password },
          process.env.JSON_PRIVATEKEY
        );
        res.cookie("auth_token", token);
        res.redirect("/dashboard");
      } else {
        res.send("No user found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  logout(req, res, next) {
    res.clearCookie("auth_token");
    res.redirect("/login");
  }
}

module.exports = new LoginController();

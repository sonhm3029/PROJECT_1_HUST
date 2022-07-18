const jwt = require("jsonwebtoken");

class Authorization {
  verify(req, res, next) {
    let authToken = req?.cookies?.auth_token;
    if (authToken) {
      try {
        let verify = jwt.verify(authToken, process.env.JSON_PRIVATEKEY);
        if (verify?.iat) {
          next();
        } else {
          res.redirect("/login");
        }
      } catch (error) {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  }
}

module.exports = new Authorization();

class LoginController {
  render(req, res, next) {
    res.render("login", { title: "Hello there", layout: false, isAuth:false});
  }
  login(req, res, next) {}
}

module.exports = new LoginController();

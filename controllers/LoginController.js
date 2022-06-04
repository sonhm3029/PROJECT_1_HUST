class LoginController {
  render(req, res, next) {
    res.render("login", { title: "Hello there", layout: false, isAuth:false});
  }
  login(req, res, next) {
    res.cookie('auth_token', 10);
    res.redirect("/dashboard");
  }

  logout(req, res, next) {
    res.clearCookie("auth_token");
    res.redirect("/login");
  }
}

module.exports = new LoginController();

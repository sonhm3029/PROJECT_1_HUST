class LoginController {
  render(req, res, next) {
    res.render("login", { title: "Hello there", layout: false, isAuth:false});
  }
  login(req, res, next) {
    res.cookie('id', 10);
    res.redirect("/dashboard");
  }
}

module.exports = new LoginController();

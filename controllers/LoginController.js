class LoginController {
  render(req, res, next) {
    res.render("login", { title: "Hello there", layout:false });
  }
}

module.exports = new LoginController();

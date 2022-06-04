class VisualizeController {
  renderAll(req, res, next) {
    res.render("datavisualizeall");
  }

  renderOne(req, res, next) {
    res.render("datavisualizeone");
  }
}

module.exports = new VisualizeController();

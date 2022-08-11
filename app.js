require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const Router = require("./routes");
const Middleware = require("./middleware");
const handlebars = require("express-handlebars");
const services = require("./service");
const handlerbarHelper = require("./config/handlebar.helper");

Middleware(app);
Router(app);

app.engine(
  "hbs",
  handlebars.engine({ extname: ".hbs", helpers: { ...handlerbarHelper } })
);
app.set("view engine", ".hbs");
app.set("views", "./views");
app.enable("view cache");

services.run();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});

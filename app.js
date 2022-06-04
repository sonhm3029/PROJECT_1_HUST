require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const Router = require("./routes");
const Middleware = require("./middleware");
const handlebars = require('express-handlebars');

Middleware(app);
Router(app);

app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs')
app.set('views', './views');
app.enable('view cache');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
}) 

// Dependencies
var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Importing routes from controllers folder
var routes = require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
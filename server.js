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

// Routes
// ===================================
require("./routes/api-routes.js")(app);

// Requiring our models for syncing
var db = require("./models");

var syncOptions = {
    force: true
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

// logging: console.log
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
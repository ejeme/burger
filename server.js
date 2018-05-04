var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname + "/public")));

// app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger-controllers.js");

// Default Route
app.use("/", routes);

// Listener
app.listen(PORT, function () {
    console.log("Listening on: http://localhost:" + PORT);
});
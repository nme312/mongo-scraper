var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/apiRoutes")(app);
require("./routes/viewRoutes")(app);

mongoose.connect("mongodb://localhost/mongoScraper");

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
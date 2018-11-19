var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");




// Express server
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

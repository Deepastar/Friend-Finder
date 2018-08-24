// npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
//Creating express server with a var nae calles app
var app = express();
//Setting initial Port
var PORT = process.env.PORT || 8080;
//Setting exp to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Type for various different custom JSON types as JSON
app.use(bodyParser.json({type:'application/*+json'}))
//Routing here
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
// Listener to start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
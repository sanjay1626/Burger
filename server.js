var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
//

var app = express();
var PORT = process.env.PORT || 3000;

//Static Files 
app.use(express.static("public"));
////URL Parse
app.use(bodyParser.urlencoded({extended: true}));
////JSON Parse
app.use(bodyParser.json());
app.use(express.static(__dirname));
////Template Engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
//
////Routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);


//Listen
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});
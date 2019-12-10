var express = require("express");
var hbs = require("hbs");
var bodyParser = require("body-parser");

var app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

// view engine 
// you to set the configurations, so that the hbs will identify views 
app.set("view engine", "hbs");

var users = [];
app.post("/user", function(req, res){
    var data = {
        name: req.body.name, 
        email: req.body.email
    };
    users.push(data);
    console.log("users array: ", users);
    res.redirect("/");
});

app.get("/users", function(req, res){
    res.json(users);
})

app.get("/", function(req, res){
    res.render("index");
})

app.listen(3000);
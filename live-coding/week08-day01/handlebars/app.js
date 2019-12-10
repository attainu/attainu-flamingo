var express = require("express");
var hbs = require("hbs");

var app = express();

// view engine 
// you to set the configurations, so that the hbs will identify views 
app.set("view engine", "hbs");

// Explore on how to load the array of objects in the handlebars
// var users = [
//     {
//         name: "Gopi",
//         email: "gopi@gmail.com",
//         mobile: 12345677890
//     },
//     {
//         name: "Ansal",
//         email: "ansal@gmail.com",
//         mobile: 12345677890
//     }
// ]
app.get("/", function(req, res){
    res.render("index", {
        list: {
            name: "Gopi"
        },
        names: ["Ansal"]
    });
})

app.listen(3000);
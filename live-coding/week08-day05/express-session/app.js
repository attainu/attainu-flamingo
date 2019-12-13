var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var session = require("express-session");

var app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: "alkdjfalks weqryqwery",
    cookie: {
        maxAge: 1000 * 10,
        path: "/",
        httpOnly: true
    }
}));

var books = [
    {
        "title": "ReactJS",
        "language": "english"
    },
    {
        "title": "lord of the rings",
        "language": "english"
    },
    {
        "title": "Harry potter",
        "language": "hindi"
    },
    {
        "title": "let us C",
        "language": "telugu"
    }
];

var filteredResults = books;

app.post("/login", function(req, res){
    // validate the user 
    req.session.user = {
        name: "Gopi",
        email: "gopi@gmail.com"
    }
    res.send("Hey, your session is set");
})

app.use(function(req, res, next){
    if(req.session.user){
        next();
    }
    else{
        res.send("Hey, you are not authenticated");
    }
});

app.post("/search", function(req, res){
    console.log("serch: ", req.body);
    res.send("Hey, you are authenticated for search");
    // var language = req.body.language.toLowerCase();
    // filteredResults =   books.filter(function(obj){
    //                             return obj.language === language;
    //                         });
    // res.redirect("/");
});

app.get("/logout", function(req, res){
    req.session.destroy();
    res.send("Hey, you are logged out");
})

app.get("/", function(req, res){
    res.render("index", {
        books: filteredResults
    });
})

app.listen(3000); 
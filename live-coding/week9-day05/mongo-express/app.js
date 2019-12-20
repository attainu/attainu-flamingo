var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var app = express();
const mongodb = require('mongodb');
// install multiparty - set the configuration

app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// mongodb setup 
var url = 'mongodb://localhost:27017';
var dbName = 'flamingo-mongo';
var DB = "";

mongodb.MongoClient.connect(url, function(err, client) {
    if(err){
        console.log("there is an error connecting to mongodb: ", err);
    }
    else{
        console.log("Hey, your db connection is successful");
       
        DB = client.db(dbName);
       
        // client.close();
    }
});

app.get("/", function(req, res){

    DB.collection("users").find({}).toArray(function(err, users){
        console.log("users: ", users);
        res.render("index", {
            users: users
        });
    });
});

app.get("/getusers", function(req, res){
    res.send({
        users: users
    })
});

app.post("/signup", function(req, res){
    var user = {
        name: req.body.fullname,
        email: req.body.email
    }
    // handle the profile image storage 
    // store the file 
    // get the file path 
    // get the file name 
    // user.profile = url of the file 
    // display the image in the table 
    DB.collection("users").insertOne(user, function(err, result){
        res.redirect("/");
    });
});

app.delete("/delete", function(req, res){
    var userIDs = req.body.items.map(function(item) {
        console.log(mongodb.ObjectID(item));
        return item = mongodb.ObjectID(item);
    });
    
    DB.collection("users").deleteMany({_id: { $in: userIDs } }, function(err, result){
        console.log("delete results: ", result);
        res.send("deletion done");
    })
})

app.listen(3000);
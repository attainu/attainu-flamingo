var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var app = express();
const mongodb = require('mongodb');
const session = require('express-session');
// install multiparty - set the configuration

app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    secret: "blog-secret"
}));

// mongodb setup 
var url = 'mongodb://localhost:27017';
var dbName = 'flamingo-blog';
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
    if(req.session.user)
        res.redirect("/home");
    else
        res.redirect("/login");
    // DB.collection("users").find({}).toArray(function(err, users){
    //     console.log("users: ", users);
    //     res.render("index", {
    //         users: users
    //     });
    // });
});

app.get("/getusers", function(req, res){
    res.send({
        users: users
    })
});

app.get("/signup", function(req, res){
    console.log("mismatch: ", req.query.mismatch);
    res.render("signup", {
        mismatch: req.query.mismatch
    });
});

app.get("/login", function(req, res){
    res.render("login", {
        invalid: req.query.invalid
    });
});

app.get("/home", function(req, res){
    if(req.session.user){
        DB.collection("posts").find({
            user_id: req.session.user._id
        }).toArray(function(err, posts){
            console.log("posts: ", posts);
            res.render("index", {
                posts: posts
            });
        })
    }
    else
        res.redirect("login");
});

app.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect("/");
});

app.get("/create", function(req, res){
    res.render("add", {
        postCreated: req.query.postCreated
    });
});

app.get("/edit/:id", function(req, res){
    if(!req.session.user)
        res.redirect("/login")
    else{
        DB.collection("posts").findOne({_id: mongodb.ObjectId(req.params.id)}, function(err, result){
            console.log("result: ", result);
            res.render("edit", {
                data: result
            });
        })
    }
});

app.post("/update", function(req, res){
    var postId = req.body.id;
    var data = {
        title: req.body.title,
        description: req.body.description
    }
    DB.collection("posts").update({
        _id: mongodb.ObjectId(postId)
    }, {$set: data }, function(err, result){
        console.log("result: ", result);
        res.redirect("/home");
    })
});

app.post("/create", function(req, res){
    if(!req.session.user)
        res.redirect("/login");
    else{
        var post = {
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user._id,
            user_name: req.session.user.name
        };
    
        DB.collection("posts").insertOne(post, function(err, result){
            if(err)
                console.log("Error in saving");
            res.redirect("/create?postCreated=true");
        })
    }
})

app.post("/login", function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    DB.collection("users").findOne({email: email}, function(err, user){
        if(user.password !== password)
            res.redirect("/login?invalid=true");
        else{
            req.session.user = user;
            res.redirect("/home");
        }
    })
})

app.post("/signup", function(req, res){
    if(req.body.password !== req.body.confirm_password){
        console.log("Hey, your password and confirm password are mismatching");
        res.redirect("/signup?mismatch=true")
    }
    var user = {
        name: req.body.fullname,
        email: req.body.email,
        password: req.body.password
    }
    
    DB.collection("users").insertOne(user, function(err, result){
        res.redirect("/login");
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
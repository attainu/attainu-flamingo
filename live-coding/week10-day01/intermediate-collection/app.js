'use strict';

// All external libraries
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var session = require("express-session");

// Create the express application
var app = express();

// Use handlebars
app.set("view engine", "hbs");

// Static folder
app.use(express.static("public"));

// Use body parser
app.use(bodyParser.urlencoded({extended: false}));

// Use session
app.use(session({
    secret: "secret-key"
}));

// The DB stuff
var DB;

var mongoClient = new mongodb.MongoClient('mongodb://localhost:27017/bookmyshow', {useNewUrlParser: true});
mongoClient.connect(function(err) {
    if(err) {
        console.log("Error connecting to MongoDB");
    } else {
        console.log("Connection to MongoDB database blog established");
    }
    DB = mongoClient.db("bookmyshow");
});


app.get("/", function(request, response) {
    // Check if the user is logged in or not
    if(request.session.user) {
        // If the user is logged in, redirect her to home page
        response.redirect("/movies");
    } else {
        // If the user is not logged in, redirect her to login page
        response.redirect("/login");
    }

});


app.get("/movies", function(request, response) {
    var data = {};

    if(!request.session.user) {
        return response.redirect("/login");
    } else {
        data.loggedInUser = request.session.user;
    }

    DB.collection("movies").find({}).toArray(function(error, movies) {
        if(error) { return response.send("error fetching movies"); }

        data.movies = movies;

        DB.collection("bookings").find({}).toArray(function(error, bookings) {
            if(error) { return response.send("error fetching bookings"); }

            data.bookings = bookings;

            response.render("movies.hbs", data);

        }); // bookings find end


    }); // movies find end

}); // route end


app.get("/book/:id", function(request, response) {
    var data = {};

    if(!request.session.user) {
        return response.redirect("/login");
    } else {
        data.loggedInUser = request.session.user;
    }

    var movieId = mongodb.ObjectId( request.params.id );

    DB.collection("movies").findOne({_id: movieId}, function(error, movie) {
        if(error) { return response.send("error fetching movie"); }

        data.movie = movie;
        response.render("movie-book.hbs", data);
    });

});


// Create booking
app.post("/book/:id", function(request, response) {
    var data = {};

    if(!request.session.user) {
        return response.redirect("/login");
    } else {
        data.loggedInUser = request.session.user;
    }

    var movieId = request.params.id;

    DB.collection("movies").findOne({_id: mongodb.ObjectID(movieId)}, function(error, movie) {
        if(error) { return response.send("error finding movie"); }

        DB.collection("bookings").insertOne({
            movieId: movieId,
            userId: request.session.user._id,
            
            // Insert some extra data for showing to the user
            userName: request.session.user.name,
            movieName: movie.name,
    
            timeOfBooking: new Date()
        }, function(error) {
    
            if(error) { return response.send("error occurred while booking"); }
    
            response.render("booking-done.hbs")
    
        }); // bookings insert end

    }); // movies find one end

}); // route end


// All authentication related code

app.get("/login", function(request, response) {
    response.render("login.hbs");
});

app.post("/login", function(request, response) {
    var user = {
        email: request.body.email,
        password: request.body.password
    };

    DB.collection("users").findOne(user, function(error, user) {

        if(error || !user) {
            response.render("invalid-login.hbs");
            return;
        }

        request.session.user = user;
        response.redirect("/");

    });
});

app.get("/signup", function(request, response) {
    response.render("signup.hbs");
});

app.post("/signup", function(request, response) {
    
    var newUser = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    };

    DB.collection("users").insertOne(newUser, function(error, data) {
        response.redirect("/login");
    });
});

app.get("/logout", function(request, response) {
    request.session.user = null;
    response.redirect("/login");
});



app.listen(3000);
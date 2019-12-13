var express = require("express");
var hbs = require("hbs");
var bodyParser = require("body-parser");
var multiparty = require("multiparty");
var cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "",
    api_key: "",
    api_secret: ""
});

var app = express();

app.use(express.static("uploads"));

app.use(bodyParser.urlencoded({extended: false}));
// view engine 
// you to set the configurations, so that the hbs will identify views 
app.set("view engine", "hbs");

var gallery = [];
app.post("/signup", function(req, res){
    console.log("data: ", req.body);
    // config the folder which is supposed to store the files 
    var form = new multiparty.Form({
        
    });
    form.parse(req, function(err, fields, files) {
        console.log("error: ", err);
        console.log("files: ", files, fields);
        
        var imgObj = {
            name: files.image[0].originalFileName,
            path: files.image[0].path.split("/")[1]
        }
        var imgObj2 = {
            name: files.image[1].originalFileName,
            path: files.image[1].path.split("/")[1]
        }
        cloudinary.uploader.upload(files.image[0].path, {resource_type: "image"}, 
            function(error, result) { 
                console.log("response from cloud: ", result);
                gallery.push(result); 
                res.redirect("/");
            }
        );
    });
});

app.get("/", function(req, res){
    res.render("index", {
        gallery: gallery
    });
})

app.listen(3000);

//Dependencies
var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

//Home Page
app.get("/", function(req, res){
    res.render("homepage");
});

//Results page
app.get("/results", function(req, res){
    
    var searchTerm = req.query.searchTerm;
    var url = "http://omdbapi.com/?apikey=thewdb&s=" +searchTerm;
    request(url, function(error, response, body){
       if(!error && response.statusCode == 200){
         var data = JSON.parse(body); //To convert 'String' response body to JS Object
         res.render("results", {data : data});
       } 
    })
});


//Connection
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie App Has Started!!!");
});
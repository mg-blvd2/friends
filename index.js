/* EJS - Embedded JavaScript
    1. NodeJS looks for ejs files in "views"
    2. ejs files end with .ejs
    3. Have to let the NodeJS engine know that we are using EJS
*/
var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  //res.send("HELLO WORLD");
  res.render("home");
});

var friendList = ["Alice", "Clark", "Brllrmy", "Octavia"];
app.get("/friends", function(req, res){
  res.render("friends", {friends: friendList});
});

app.post("/addfriend", function(req, res){
  var newfriend = req.body.newFriend;
  friendList.push(newfriend);
  res.redirect("/friends")
  console.log(req.body);
});

app.get("*", function(req, res){
  //res.send("Page not found");
  res.render("error");
});

app.listen(process.env.PORT, function(){
  console.log("Server is up and running!");
});

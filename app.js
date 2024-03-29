

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const firebase = require("firebase");
const request = require("request");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let name;

app.get("/", function(req,res){
  res.render("index", {});
});



app.get("/admin", function(req, res){
  res.render("admin", {});
});

app.get("/home", function(req, res){
  res.render("home", {});
});

app.post("/home", function(req, res){
  res.redirect("/home");
});

app.get("/customer", function(req, res){
  res.render("customer", {});
});

app.post("/customer", function(){
  res.redirect("/customer");
});

app.get("/products", function(req, res){
  res.render("products", { });
});

app.post("/products", function(req, res){
  res.redirect("/products");
});

app.get("/edit", function(req, res){
  res.render("edit", {});
});

app.post("/edit", function(req, res){
  res.redirect("/edit");
});

app.get("/fruits/:name", function(req, res){
    name = req.params.name;

  res.render("fruits", {value : name});
});


app.get("/update", function(req, res){
  
  res.render("update", {name : name});
});

app.post("/update", function(req, res){

  res.redirect("/update");
});



app.get("/user", function(req, res){
  res.render("user", {});
});

app.post("/user", function(req, res){
  res.redirect("/user");
})


app.get("/delivary", function(req, res){
  
  res.render("delivary", {});
});


app.listen(process.env.PORT || 3000, function(){
  console.log("server running on port 3000");
});

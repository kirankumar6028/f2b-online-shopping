

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const firebase = require("firebase");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extebded: true}));
app.use(express.static("public"));

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

app.get("/fruits", function(req, res){
  res.render("fruits", {});
});

app.post("/fruits", function(req, res){
  res.redirect("/fruits");
});

app.get("/vegetables", function(req, res){
  res.render("vegetables", {});
});

app.post("/vegetables", function(req, res){
  res.redirect("/vegetables");
});

app.get("/herbs", function(req, res){
  res.render("herbs", {});
});

app.post("/herbs", function(req, res){
  res.redirect("/herbs");
});

app.get("/seasonals", function(req, res){
  res.render("seasonals", {});
});

app.post("/seasonals", function(req, res){
  res.redirect("/seasonals");
});



app.listen(process.env.PORT || 3000, function(){
  console.log("server running on port 3000");
});

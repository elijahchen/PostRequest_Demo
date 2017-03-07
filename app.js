var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var friends = [
    "Meggie",
    "Rita",
    "Caroline",
    "Rose",
    "Janet",
    "Kaileigh",
    "Mindy",
    "Cindy"
];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.post("/addfriend", function (req, res) {
    //newfriend is the name property from input(friends.ejs)
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function (req, res) {
    res.render("friends", {friends: friends});
});

app.get("*", function (req, res) {
    res.send("404: PAGE NOT FOUND!");
});

app.listen(3000, process.env.IP, function () {
    console.log(">>>>>>> Server Started! <<<<<<<");
});
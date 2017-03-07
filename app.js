var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.post("/addfriend", function (req, res) {
   res.send("You have reached the post route!");
});

app.get("/friends", function (req, res) {
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
    res.render("friends", {friends: friends});
});

app.get("*", function (req, res) {
    res.send("404: PAGE NOT FOUND!");
});

app.listen(3000, process.env.IP, function () {
   console.log(">>>>>>> Server Started! <<<<<<<");
});
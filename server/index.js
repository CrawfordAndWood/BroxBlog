const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
const router = express.Router();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/broxblog", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use("/", router);
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

let post = require("./models/model");

router.route("/getData").get(function(req, res) {
    post.find({}, function(err, result) {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });
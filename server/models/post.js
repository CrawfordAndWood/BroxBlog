const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let post = new Schema({
  _id: String,
  title: String,
  post: String, //object array - contains paragraphs, images, lists etc.
  created: Date,
  modified: Date,
  tags: Array,
  image: Buffer,
});

module.exports = mongoose.model("post", post);

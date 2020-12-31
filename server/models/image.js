const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let image = new Schema({ img: { data: Buffer, contentType: String } });

module.exports = mongoose.model("image", image);

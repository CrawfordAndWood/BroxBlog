const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");
const router = require("./routes/api/blog")
app.use(cors());
const connectDB = require("./config/db");
const path = require("path");

connectDB();

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use("/", router);
app.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
});
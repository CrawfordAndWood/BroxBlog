const express = require("express");
const router = express.Router();
const BlogService = require("../../services/blogService");
const blogService = new BlogService();
const auth = require("../../middleware/auth");

router.get("/", async (req, res) => {
  try {
    const posts = await blogService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/new", auth, async (req, res) => {
  try {
    console.log("well done you made it", req.body);
    let newPostResult = await blogService.newPost(req.body);
    if (newPostResult.Status === "FAILED") {
      return res.status(400).json({ errors: [{ msg: newPostResult.Message }] });
    }
    return res.json(newPostResult);
  } catch (err) {
    res.status(500).send("Server error", err.message);
  }
});

module.exports = router;

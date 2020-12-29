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

//@access   Private - eventually only global admin has option
router.get("//:page/:limit", auth, async (req, res) => {
  try {
    let posts = await blogService.getSelectedPosts(req.params);
    res.json(posts);
  } catch (err) {
    res.status(500).send("Server Error", err);
  }
});

//@access   Private - eventually only global admin has option
router.get("/:term/:page/:limit", auth, async (req, res) => {
  try {
    console.log("is this the request?", req.params);
    let posts = await blogService.getSelectedPosts(req.params);
    console.log("response from searh", posts);
    res.json(posts);
  } catch (err) {
    res.status(500).send("Server Error", err);
  }
});

router.get("/count", auth, async (req, res) => {
  try {
    console.log("counting");
    const postCount = await blogService.countPosts();
    res.json(postCount);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.get("/count/:term", auth, async (req, res) => {
  try {
    console.log("counting 2");
    const postCount = await blogService.countPosts(req.params.term);
    res.json(postCount);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.get("/:postid", async (req, res) => {
  try {
    const post = await blogService.getPost(req.params.postid);
    res.json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/new", auth, async (req, res) => {
  try {
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

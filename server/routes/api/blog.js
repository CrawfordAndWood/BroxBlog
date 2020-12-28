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

//@route    GET api/areas/
//@desc     Get area management page
//@access   Private - eventually only global admin has option
router.get("/:page/:limit", auth, async (req, res) => {
  try {
    let areas = await blogService.getSelectedPosts(req.params);
    res.json(areas);
  } catch (err) {
    res.status(500).send("Server Error", err);
  }
});

//@route    GET api/area/search
//@desc     Filter area
//@access   Private - eventually only global admin has option
router.get("/:term/:page/:limit", auth, async (req, res) => {
  try {
    let areas = await blogService.getSelectedPosts(req.params);
    res.json(areas);
  } catch (err) {
    res.status(500).send("Server Error", err);
  }
});

router.get("/count", auth, async (req, res) => {
  try {
    const areaCount = await blogService.countPosts();
    res.json(areaCount);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.get("/count/:term", auth, async (req, res) => {
  try {
    const areaCount = await blogService.countPosts(req.params.term);
    res.json(areaCount);
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

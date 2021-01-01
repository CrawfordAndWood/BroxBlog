const express = require("express");
const router = express.Router();

//Services
const BlogService = require("../../services/blogService");
const blogService = new BlogService();
const ImageService = require("../../services/imageservice");
const imageService = new ImageService();

//configure middleware
const auth = require("../../middleware/auth");
const uploadImage = require("../../middleware/multer");

//route methods
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

router.post("/new", auth, async (req, res) => {
  try {
    let newPostResult = await blogService.newPost(req.body);
    return res.json(newPostResult);
  } catch (err) {
    res.status(500).send("Server error", err.message);
  }
});

router.post("/upload", uploadImage(), async (req, res, next) => {
  try {
    console.log("req files", req.files);
    var result = await imageService.saveImageForPost(req.files[0]);
    res.json({ message: result });
  } catch (error) {
    console.log(error.message);
  }
});

//get for the image? Can hard code path in there.
router.get("/images", auth, async (req, res) => {
  try {
    console.log("getting images");
    let images = await imageService.getAllImages();
    console.log("response from searh", images[0]);
    res.json(images[0]);
  } catch (err) {
    res.status(500).send("Server err", err.message);
  }
});

router.get("/:postid", async (req, res) => {
  try {
    console.log("going agter post");
    const post = await blogService.getPost(req.params.postid);
    res.json(post);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;

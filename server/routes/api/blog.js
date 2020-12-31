const express = require("express");
const router = express.Router();

//Services
const BlogService = require("../../services/blogService");
const blogService = new BlogService();
const ImageService = require("../../services/imageservice");
const imageService = new ImageService();

//configure auth
const auth = require("../../middleware/auth");

//configure storage
const fs = require("fs");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: async (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Allowed only .png, .jpg, .jpeg and .gif"));
    }
  },
});
//models
const Image = require("../../models/image");

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

// router.get("/:postid", async (req, res) => {
//   try {
//     console.log("going agter post");
//     const post = await blogService.getPost(req.params.postid);
//     res.json(post);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

router.post("/new", auth, async (req, res) => {
  try {
    console.log("post type", req.get("Content-Type"));
    let newPostResult = await blogService.newPost(req.body);
    if (newPostResult.Status === "FAILED") {
      return res.status(400).json({ errors: [{ msg: newPostResult.Message }] });
    }
    return res.json(newPostResult);
  } catch (err) {
    res.status(500).send("Server error", err.message);
  }
});

// router.post("/upload", auth, async (req, res) => {
//   try {
//     console.log("post type", req.files);
//     await imageService.newImage(req.files);
//   } catch (err) {
//     res.status(500).send("Server error", err.message);
//   }
// });

router.post("/upload", upload.any("image"), (req, res, next) => {
  try {
    console.log("req file path", req.files[0]);
    var new_img = new Image();
    new_img.img.data = fs.readFileSync(req.files[0].path);
    new_img.img.contentType = "image/png"; // or 'image/png'
    new_img.save();
    res.json({ message: "New image added to the db!" });
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

module.exports = router;

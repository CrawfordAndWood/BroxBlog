const express = require("express");
const router = express.Router();
const config = require("config");
const BlogService = require("../../services/blogService");
const blogService = new BlogService();
const cors = require('cors');

//router.all('*', cors());
router.route("/getData").get(async (req, res) => {
    try{
        const posts = await blogService.getAllPosts();
        res.json(posts);
    } catch(error){
        res.status(500).json(error.message);
    }
});

module.exports = router;
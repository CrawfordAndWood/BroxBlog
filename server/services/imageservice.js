const Image = require("../models/image");
const Post = require("../models/post");

const uuid = require("uuid");
const fs = require("fs");

class ImageService {
  constructor() {}

  async getAllImages() {
    try {
      let allPosts = await Image.find({});
      return allPosts;
    } catch (err) {
      return err.message;
    }
  }

  async getImage(postId) {
    try {
      let post = await Post.findOne({ _id: postId });
      return post;
    } catch (err) {
      return err.message;
    }
  }

  async saveImageForPost(image) {
    try {
      console.log("image hsould have an id", image);
      let post = await Post.findOne({ _id: image.filename });
      post.image = fs.readFileSync(image.path);

      post.modified = Date.now();
      post.author = "George Crawford";
      await post.save();

      let response = {
        Status: "SUCCESS",
        Message: "has been created and a welcome email sent",
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async saveImage(image) {
    try {
      var new_img = new Image();
      new_img.img.data = fs.readFileSync(image);
      new_img.img.contentType = "image/png"; // or 'image/png'
      new_img.save();

      let response = {
        Status: "SUCCESS",
        Message: "has been created and a welcome email sent",
      };
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ImageService;

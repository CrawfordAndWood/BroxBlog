const uuid = require("uuid");

const Image = require("../models/image");

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

  async newImage(image) {
    try {
      let newImage = new Image(image);
      await newImage.save();

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

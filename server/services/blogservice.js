const uuid = require("uuid");

const Post = require("../models/post");

class BlogService {
  constructor() {}

  async getAllPosts() {
    try {
      let allPosts = await Post.find({});
      return allPosts;
    } catch (err) {
      return err.message;
    }
  }

  /* Post Area  */
  async newPost(newPostArgs) {
    try {
      let newPost = new Post(newPostArgs);
      newPost.id = uuid.v4();
      newPost.post = newPostArgs.post;
      await newPost.save();

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

module.exports = BlogService;

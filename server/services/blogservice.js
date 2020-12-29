const uuid = require("uuid");

const Post = require("../models/post");

class BlogService {
  constructor() {}
  /*Count Area  */
  async countPosts(term = null) {
    if (term === null) {
      let postCount = await Post.countDocuments();
      return postCount;
    }
    const regTerm = new RegExp(term, "i");
    let postCount = await Post.countDocuments({
      $or: [{ title: regTerm }, { post: regTerm }, { tags: regTerm }],
    });
    return postCount;
  }

  /*Get Areas */
  async getSelectedPosts(params) {
    if (params.term === undefined) {
      let posts = await Post.find()
        .skip(Number(params.page - 1) * Number(params.limit))
        .limit(Number(params.limit));
      return posts;
    }
    let term = new RegExp(params.term, "i");
    let posts = await Post.find({
      $or: [{ title: term }, { post: term }, { tags: term }],
    })
      .skip(Number(params.page - 1) * Number(params.limit))
      .limit(Number(params.limit));
    return posts;
  }

  async getAllPosts() {
    try {
      let allPosts = await Post.find({});
      return allPosts;
    } catch (err) {
      return err.message;
    }
  }

  async getPost(postId) {
    try {
      let post = await Post.findOne({ _id: postId });
      return post;
    } catch (err) {
      return err.message;
    }
  }

  /* Post Area  */
  async newPost(newPostArgs) {
    try {
      let newPost = new Post(newPostArgs);
      newPost._id = uuid.v4();
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

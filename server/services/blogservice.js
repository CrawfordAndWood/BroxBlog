let post = require("../models/post");

class BlogService{
    constructor(){}
    async getAllPosts(){
        try{
            let allPosts = await post.find({});
            return allPosts;
        } catch(err){
            return err.message;
        }
    }
}

module.exports = BlogService;
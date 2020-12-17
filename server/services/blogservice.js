let post = require("../models/model");

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
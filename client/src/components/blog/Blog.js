import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions/blog";

const Blog = ({ getAllPosts, posts: { posts, loading } }) => {
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    //1. ation to import the posts
    //2. loop through all the posts.
    <Fragment>
      {loading ? (
        <p>Loading</p>
      ) : (
        <Fragment>
          {posts.map((p, i) => (
            <Fragment key={i}>
              <div dangerouslySetInnerHTML={{ __html: p.post }}></div>
            </Fragment>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getAllPosts })(Blog);

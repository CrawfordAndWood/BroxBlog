import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getPost, getAllPosts } from "../../actions/blog";
import { Link, withRouter } from "react-router-dom";
import "./blog.css";

const Blog = ({ getPost, getAllPosts, posts: { posts, loading } }) => {
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="bb-front-page">
      {loading ? (
        <p>Loading</p>
      ) : (
        <Fragment>
          {posts.map((p) => (
            <Link to="/post" key={p._id} onClick={() => getPost(p._id)}>
              <div
                className="bb-post-link"
                dangerouslySetInnerHTML={{ __html: p.post }}
              ></div>
            </Link>
          ))}
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getPost, getAllPosts })(Blog);

import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import {
  getPost,
  getSelectedPosts,
  getAllPosts,
  updatePage,
  updateLimit,
} from "../../actions/blog";
import { Link, withRouter } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Pagination from "../table/Pagination";
import Blurb from "./Blurb";
import "./blog.css";
import { arrayBufferToBase64 } from "../../utils/arrayTansformer";

const Blog = ({
  getPost,
  getSelectedPosts,
  updatePage,
  updateLimit,
  posts: { posts, loading },
}) => {
  useEffect(() => {
    getSelectedPosts();
  }, []);
  return (
    <div className="bb-front-page">
      <Blurb />
      <Pagination updatePageFn={updatePage} updateLimitFn={updateLimit} />
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="blog-container">
            {posts.map((p, i) => (
              <Link to="/post" key={p._id} onClick={() => getPost(p._id)}>
                <h3>{p.title}</h3>
                <div className="bb-post-link">
                  <img
                    className="post-image"
                    src={
                      p.image !== undefined
                        ? "data:image/jpeg;base64," +
                          arrayBufferToBase64(p.image.data)
                        : ""
                    }
                    alt="Helpful alt text"
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: p.post.substring(0, 200),
                    }}
                  ></div>
                  <small>
                    modified: {p.modified !== undefined ? p.modified : ""}{" "}
                    <br />
                    by: {p.author}
                  </small>
                </div>
              </Link>
            ))}
            <Pagination updatePageFn={updatePage} updateLimitFn={updateLimit} />
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, {
  getPost,
  getAllPosts,
  getSelectedPosts,
  updatePage,
  updateLimit,
})(Blog);

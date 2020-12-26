import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

const Post = ({ posts: { post, loading } }) => {
  useEffect(() => {}, []);
  return (
    <div className="bb-front-page">
      {loading ? (
        <p>Loading</p>
      ) : (
        <Fragment>
          <div dangerouslySetInnerHTML={{ __html: post.post }}></div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(Post);

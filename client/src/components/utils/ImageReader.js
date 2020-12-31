import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getImages } from "../../actions/upload";

const Test = ({ getImages, upload: { image } }) => {
  useEffect(() => {
    getImages();
  }, []);
  return (
    <Fragment>
      <h1>Image Component</h1>
      <img src={image} alt="Helpful alt text" />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  upload: state.upload,
});

export default connect(mapStateToProps, { getImages })(Test);

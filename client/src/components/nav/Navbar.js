import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { getSelectedPosts, resetSearch } from "../../actions/blog";
import { Link, withRouter } from "react-router-dom";
import Search from "../table/Search";

import "./navbar.css";

const Navbar = ({ getSelectedPosts, resetSearch }) => {
  useEffect(() => {}, []);
  return (
    <Fragment>
      <header></header>
      <div>
        <Search searchFn={getSelectedPosts} resetFn={resetSearch} />
      </div>
      <div></div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getSelectedPosts, resetSearch })(
  Navbar
);

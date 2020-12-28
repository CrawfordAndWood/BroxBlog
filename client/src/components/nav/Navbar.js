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
      <header className="App-header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="brox-logo-container">
            <p className="header-big">Brox</p>
            <p className="header-small">Blog</p>
          </div>
        </Link>
      </header>
      <Search searchFn={getSelectedPosts} resetFn={resetSearch} />
      <div className="donate-bar">
        Patreon/Donate
        <Link to="/write">Write</Link>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getSelectedPosts, resetSearch })(
  Navbar
);

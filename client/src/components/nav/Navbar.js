import React, {Fragment, useEffect} from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import './navbar.css';

const Navbar = ({}) => {
    useEffect(() => {}, []);
    return(
        <Fragment>
            <header className="App-header">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="brox-logo-container">
                  <p className="header-big">Brox</p>
                  <p className="header-small">Blog</p>
                </div>
              </Link>
            </header>
            <div className="search-bar">Search Bar  |  Contact | About </div>
            <div className="donate-bar">Patreon/Donate 
              <Link to="/write">Write</Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    blog: state.blog
});

export default connect(mapStateToProps)(Navbar);
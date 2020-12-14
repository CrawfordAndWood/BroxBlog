import React, {Fragment, useEffect} from "react";
import { connect } from "react-redux";
import './navbar.css';

const Navbar = ({}) => {
    useEffect(() => {}, []);
    return(
        <Fragment>
            <header className="App-header">
              <div className="brox-logo-container">
                <p className="header-big">Brox</p>
                <p className="header-small">Blog</p>
              </div>
            </header>
            <div className="search-bar">Search Bar  |  Gimme a shout | About </div>
            <div className="donate-bar">Patreon/Donate</div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    blog: state.blog
});

export default connect(mapStateToProps)(Navbar);
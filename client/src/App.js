import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import Blog from "./components/blog/Blog";
import Navbar from "./components/nav/Navbar"
import store from "./store";
import {getAllPosts} from "./actions/blog";

//css
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="App">
          <Navbar className="navbar"/>
          <div className="sidebar-left"></div>
          <div className="brox-content">
            <p>Bringing you the latest insights in people and technology</p>
            <Blog/>
          </div>
          <div className="sidebar-right"></div>
          <hr/>
          <footer className="footer">
            Copyright Crawford and Wood 2020
        </footer>
        </div>

      </Fragment>
    </Provider>
  );
}

export default App;

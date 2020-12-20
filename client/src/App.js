import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Blog from "./components/blog/Blog";
import BlogContainer from "./components/blogcontainer/BlogContainer"
//import BlogContainer from "./components/blogcontainer/BlogContainer;"
import Test from "./components/test/Test"
import Navbar from "./components/nav/Navbar"
import store from "./store";

//css
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Fragment>
        <div className="App">
          <Navbar className="navbar"/>
          <div className="sidebar-left"></div>
          <div className="brox-content">
            <p>Bringing you the latest insights in people and technology</p>
            <Blog/>
            <BlogContainer/>
            <Test/>
          </div>
          <div className="sidebar-right"></div>
          <hr/>
          <footer className="footer">
            Copyright Crawford and Wood 2020
        </footer>
        </div>

      </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Blog from "./components/blog/Blog";
import Post from "./components/post/Post";
import Writer from "./components/write/Writer";
import Navbar from "./components/nav/Navbar";
import NotFound from "./components/layout/NotFound";
import store from "./store";

//css
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="App">
            <Navbar className="navbar" />
            <div className="sidebar-left"></div>
            <div className="brox-content">
              <Switch>
                <Route exact path="/" component={Blog} />
                <Route exact path="/write" component={Writer} />
                <Route exact path="/post" component={Post} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <div className="sidebar-right"></div>
            <footer className="footer">Copyright Crawford and Wood 2020</footer>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

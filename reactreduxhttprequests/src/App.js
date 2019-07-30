import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import PostList  from "./components/post";

class App extends Component{
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Start Working !</h1>
          <Route exact path="/" component={PostList} />
          <Route exact path="/1" />
          <Route exact path="/2" />
          <Route exact path="/3" />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect ()(App);

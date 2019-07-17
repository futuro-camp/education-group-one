import React, {Component} from "react";
import Login from "./components/login";
import Wrapper from "./components/wrapper";
import { BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import "./App.css";
 
export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={ Login }/>
          <Route path="/items" component={ Wrapper } />
        </Switch>
      </Router>
    );
  }
}

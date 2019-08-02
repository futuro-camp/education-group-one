import React, {Component} from "react";
import Login from "./components/login";
import Wrapper from "./components/wrapper";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/redux/reducers";
import thunk from "redux-thunk";
import "./App.css";

const store = createStore(reducer, applyMiddleware(thunk));
 
export default class App extends Component {

  render() {
    return (
      <Provider store = {store}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login" component={ Login }/>
            <Route path="/items" component={ Wrapper } />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

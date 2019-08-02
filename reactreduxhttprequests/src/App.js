import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Header  from "./components/header";
import Login from "./components/login.jsx";
import Items from "./components/items.jsx";
// import ItemsId from "./components/itemsId.jsx";
import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();

export const WrongPage = () => <h1>Error 404</h1>;
class App extends Component{
  render () {
    return (
      <Router history={browserHistory} >
        <div className="App">
          <h2>React-Redux</h2>
          <h4>using middlewares for making HTTP requests</h4>
          <p>login: test | password: admin</p>
          <Header />
          <Switch>
            <Route exact path= "/" component = {Login} />
            <Route exact path = "/api/providers" component = {Items}/>
            <Route exact path = "/items/" />
            <Route component = {WrongPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps (state) {
  return {
    state
  }
}

export default connect (mapStateToProps, null)(App);

import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Header  from "./components/header";
import Login from "./components/login.jsx";
import Items from "./components/items.jsx";
// import ItemsId from "./components/itemsId.jsx";

export const WrongPage = () => <h1>Error 404</h1>;
class App extends Component{
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>React-Redux with using middlewares for making HTTP requests</h1>
          <Header />
          <Switch>
            <Route exact path="/" component = {Login} />
            <Route exact path = "/api/providers" component = {Items}/>
            <Route exact path = "/items/" />
            <Route component = {WrongPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps (state) {
  return {

  }
}

export default connect (mapStateToProps, null)(App);

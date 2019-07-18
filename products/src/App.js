import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Login, Wrapper} from "./components";
import "./App.css";

export default () => (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/items" component={Wrapper} />
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
);

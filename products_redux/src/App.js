import React from "react";
import { Provider } from "react-redux";
import { history } from "./constants";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Login, Wrapper } from "./components";
import store from "./store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/items" component={Wrapper} />
            <Redirect from="/" to="/login" />
          </Switch>
        </Router>     
      </Provider>
    </div>
  );
}

export default App;

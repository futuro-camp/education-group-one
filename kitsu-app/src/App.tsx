import React from "react";
import { Provider } from "react-redux";
import { MainPage, AnimePage } from "./components";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./constants";
import store from "./store";
import "./style/App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route path="/app/" component={MainPage} />
            <Route path="/anime/" component={AnimePage} />
            <Redirect from="/" to="/app" />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import {WrongPage, Wrapper} from "./wrapper.jsx";
import Login from "./login.jsx";
import Items from "./items.jsx";
import ItemsId from "./itemsId.jsx";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Switch>
          <Route exact path ="/" component={Login}/>
          <Route exact path ="/wrapper" component={Wrapper}>
            <Switch>
              <Route exact path ="/items" component={Items}/>
              <Route exact path ="/items/id" component={ItemsId}/>
            </Switch>
          </Route>
          <Route component={WrongPage}/>
        </Switch>
      </Router> */}
      <Wrapper />
    </div>
  );
}

export default App;

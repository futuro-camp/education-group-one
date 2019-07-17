import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import {WrongPage, Wrapper} from "./wrapper.jsx";
// import Login from "./login.jsx";
// import Items from "./items.jsx";
// import ItemsId from "./itemsId.jsx";

function App() {
  return (
    <div className="App">
      <Wrapper />
    </div>
  );
}

export default App;

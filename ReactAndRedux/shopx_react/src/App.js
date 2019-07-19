import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Wrapper from "./components/wrapper";
import Reduser from "./components/redux/redusers";
import "./App.css";

const store = createStore(Reduser);

export default function App(props) {

  return (
    <Provider store={store}>
      <Wrapper/>
    </Provider>
  );
}; 

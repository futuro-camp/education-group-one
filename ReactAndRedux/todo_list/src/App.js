import React, {Component} from "react";
import {Provider} from "react-redux";
import "./App.css";
import Wrapper from "./components/wrapper";
import { createStore } from "redux";
import Reducer from "./components/redux/reducers";

const store = createStore(Reducer);

export default class App extends Component {

  render() {
    return (
      <Provider store = {store}>
        <Wrapper/>
      </Provider>
    );
  }
}

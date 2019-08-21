import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./redux/reduser";
import Weather from "./components/weather";
import "./App.css";

let store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Weather/>
      </Provider>
    </div>
  );
}

export default App;

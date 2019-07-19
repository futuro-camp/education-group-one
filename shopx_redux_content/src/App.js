import React from "react";
import CardWrapper from "./components/card-wrapper";
import { Provider } from "react-redux";
import store from "./components/store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CardWrapper />
      </Provider>
    </div>
  );
}

export default App;

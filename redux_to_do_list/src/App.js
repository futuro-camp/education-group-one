import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Header, Content, Footer} from "./redux/components";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <Content />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;

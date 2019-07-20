import React from "react";
import "./App.css";
import Header from  "./components/header";
import Schedule from "./components/content";
import TypingNewCase from "./components/footer";
import "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Schedule />
      <TypingNewCase />
    </div>
  );
};

export default App;

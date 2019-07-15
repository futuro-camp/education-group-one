import React, {Component} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = { list: [] };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

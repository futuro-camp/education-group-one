import React, {Component} from "react";
import Header from "./components/header";
import Card from "./components/content";
import Footer from "./components/footer";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = { list: [],  lastIndex: 0 };
  }

  addCard = (event) => {
    if(event.key === "Enter") {
      this.setState({ list: [...this.state.list, { key: this.state.lastIndex, name: event.target.value, isChecked: false }], lastIndex: this.state.lastIndex + 1 });
      event.target.value = "";
    }
  }

  removeCard = (index) => {
    let listWithoutElement = this.state.list.filter((element) => element.key !== index); 
    this.setState({ list: listWithoutElement, lastIndex: this.state.lastIndex });
  }

  checkCard = (index) => {
    let checkedElement = this.state.list.find((element) => element.key === index);
    checkedElement.isChecked = !checkedElement.isChecked;
    this.setState({ list: this.state.list, lastIndex: this.state.lastIndex });
  }

  render() {
    return (
      <div className="App">
        <Header complited={this.state.list.filter((element) => element.isChecked).length} total={this.state.list.length}/>
        <div className="cardsList">
          { this.state.list.map((element) => <Card key={element.key} name={element.name} isChecked={element.isChecked} checkMethod={() => {this.checkCard(element.key);}} deleteMethod={() => {this.removeCard(element.key);}}/>)}
        </div>
        <Footer addToList={this.addCard}/>
      </div>
    );
  }
}

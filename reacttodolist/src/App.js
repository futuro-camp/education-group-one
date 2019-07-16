import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from  "./header";
import Schedule from "./content";
import TypingNewCase from "./footer";
import "./footer";
class App extends React.Component {
  constructor(){
    super();
    //setting default value
    this.state={
      name: "Default to-do list",
      completed: this.completedCounter,
      inProgress: 1,
      lastIndex: 0,
      list: []
    };
    this.inProgressCounter = this.inProgressCounter.bind(this);
    this.completedCounter = this.completedCounter.bind(this);
    this.creatingCard = this.creatingCard.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.delCase = this.delCase.bind(this);
  }
  //method for counting total amount of cases
  inProgressCounter = function() {
    return this.state.list.length;
  }
  //method for counting amount of completed cases
  completedCounter = function() {
    return this.state.list.filter((element) => element.status).length;
  }
  // //method for adding a new card to list
  creatingCard = function(event) {
    let array= this.state;
    if (event.key === "Enter") {
        array.list.push({
        text: event.target.value,
        status: false,
        id: this.state.lastIndex+1
      })
      event.target.value = ""
      this.setState(
        {
          list : array.list,
          lastIndex: this.state.lastIndex + 1
        }
      )
    }
  }
  //changing checkbox
  checkBox = function(id) {
    let myCase = this.state.list.find((element) => id===element.id);
    myCase.status = !myCase.status;
    this.setState({});
  }
  //deleting case
  delCase = function(id) {
    let newList = this.state.list.filter((element) => element.id !== id);
    this.setState( { list: newList } );
  }
  render(){
    return (
      <div className="App">
        <Header title={this.state.name}
                completed={this.completedCounter()}
                inProgress={this.inProgressCounter()}/>

        <Schedule list={this.state.list}
                  checker={this.checkBox}
                  remover={this.delCase}/>

        <TypingNewCase fnx={this.creatingCard}/>
      </div>
    );
  }
}

export default App;

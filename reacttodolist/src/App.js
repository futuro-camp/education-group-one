import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from  "./header";
import "./content";
import "./footer";

class App extends React.Component {

  constructor(){
    super();
    //setting default value
    this.state={
      name: "Default List",
      completed: 0,
      inProgress: 1,
      list: [
        {text: "New case", status: false},
        {text: "New case", status: true}
      ]
    };
    this.inProgressCounter = this.inProgressCounter.bind(this);
    this.completedCounter = this.completedCounter.bind(this);
  }

  //method for counting total amount of cases
  inProgressCounter = function() {
    return this.state.list.length;
  }
  //method for counting amount of completed cases
  completedCounter = function() {
    return this.state.list.filter((element) => element.status).length;
  }

  render(){
    return (
      <div className="App">
        <Header title={this.state.name}
                completed={this.completedCounter()}
                inProgress={this.inProgressCounter()}/>
        <Schedule list={this.state.list}/>
      </div>
    );
  }
}

export default App;

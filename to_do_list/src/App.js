import React, {Component} from "react";
import "./App.css";
import {Header, Content, Footer} from "./components";

class App extends Component {
  constructor(){
    super();
    this.state = { 
      idCount: 0,
      name: "Name",
      list: []
    };
    this.changeName = this.changeName.bind(this);
    this.addTask = this.addTask.bind(this);
    this.statusChange = this.statusChange.bind(this);
    this.remove = this.remove.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  changeName(event){
      if(event.target.value.trim()){
        this.setState({name: event.target.value});
      } else{
        this.setState({name: this.state.name});
        event.target.value = this.state.name;
      }
  }

  changeValue(id, event){
    if(event.key === "Enter" || event.key === "Escape" ){
      event.target.blur();
      return;
    }
    let task = this.state.list.find((task) => task.id === id);
    task.name = event.target.value;
    this.setState({list: this.state.list});
  }

  addTask(event){
    if(event.key === "Escape"){
      event.target.value = "";
      event.target.blur();

    }
    if(event.key !== "Enter"){
      return;
    }
    this.setState({list: [...this.state.list, {
        id: this.state.idCount, 
        name: event.target.value, 
        status: false
      }],
      idCount: this.state.idCount + 1
    });
    event.target.value = "";
  }

  statusChange(id){
    let task = this.state.list.find((task) => task.id === id);
    task.status = !task.status; 
    this.setState({list: this.state.list});
  }

  remove(id){
    this.setState({list: this.state.list.filter((task) => task.id !== id)});
  }

  render(){ 
    return(
      <div className="app">
        <Header name={this.state.name} 
                changeName={this.changeName} 
                marked={this.state.list.filter(x => x.status).length}
                count={this.state.list.length}/>
        <Content list={this.state.list} 
                click={this.statusChange} 
                remove={this.remove} 
                change={this.changeValue}/>
        <Footer addTask={this.addTask}/>
      </div>
    );
  }
}

export default App;

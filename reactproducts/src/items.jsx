import React from "react";
import "./items.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";

class Items extends React.Component {
    constructor(){
        super();
        this.state ={
            categories: [{id:0, name:"asdasd"},{id:0, name:"asdasd"}],
            items: []
        }
    }
    //getting from the server categories
    componentDidMount(){
        axios.get("http://192.168.1.100:3000/api/providers")
            .then((content) => {
                this.setState({categories: content.data});
            })
    }
    //dropDown making categories.names
    categoriesMap(array) {
        return array.map((element) => {
            return <li key={element.id}>{element.name}</li>
        })
    }
    //dropDown get user-choice by ID
    choice(val) {
        // console.log(val.value.key);
        axios.get(`http://192.168.1.100:3000/api/providers/${val.value.key}/items`)
        .then((answer) => {
            console.log(answer);
            this.setState({items:answer.data})
        })
    }

    render(){
        return (
            <div>
                <h1>Items</h1>
                <Dropdown   placeholder="Select"
                            options={this.categoriesMap(this.state.categories)}
                            onChange={(value)=>this.choice(value)}
                            className="DropDown">
                </Dropdown>
                <div>
                    {this.state.items.map(it=><button>{it.name}</button>)}
                </div>
            </div>
        )
    }
}

export default Items;

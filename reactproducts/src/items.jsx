import React from "react";
import "./items.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";

class OneItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state ={
        //     title: "default"
        // }
    }
    render() {
        return (
            <button className="item" onClick={() => {
                    this.props.history.push(`/items/${this.props.id}`);
                    }}>
                {this.props.title}
            </button>
        )
    }
}

class Items extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            categories: [{id:0, name:"asdasd"},{id:0, name:"asdasd"}],
            items: [],
            dropDownName: "Select category pls"
        };
    }
    //getting from the server categories
    componentDidMount(){
        axios.get("http://192.168.1.100:3000/api/providers", {header: {auth:localStorage.getItem("MyKey")}})
            .then((content) => {
                this.setState({categories: content.data});
            })
    }
    //dropDown making categories.names
    itemsMap() {
        return this.state.items.map((element) => {
            return <OneItem history={this.props.history} key={element.id} id={element.id} title={element.name}> </OneItem>;
        })
    }
    categoriesMap() {
        return this.state.categories.map((element) => {
            return { value:element.id, label:element.name };
        })
    }
    //dropDown get user-choice by ID
    choice(val) {
        // console.log(val.value.key);
        axios.get(`http://192.168.1.100:3000/api/providers/${val.value}/items`, {header: {auth:localStorage.getItem("MyKey")}})
        .then((answer) => {
            this.setState({items:answer.data, dropDownName: val.label});
        });
    }
    render(){
        return (
            <div>
                <h1>Items</h1>
                <Dropdown   placeholder={this.state.dropDownName}
                            options={this.categoriesMap()}
                            onChange={(value) => this.choice(value)}
                            className="DropDown">
                </Dropdown>
                <div className="itemsList">
                    {this.itemsMap()}
                </div>
            </div>
        );
    }
}

export default Items;

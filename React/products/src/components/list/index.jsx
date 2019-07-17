import React, { Component } from "react";
import ListItem from "../listItem";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./style.css";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { filterOptions: [ "one", "two", "three" ], itemsList: [ { name: "one", id: 1 }, { name: "two", id: 2 }, { name: "three", id: 3 } ] };
    }

    onSelect = (selected) => {
        console.log(selected);
    } 

    chooseItem = (id) => {
        this.props.history.push(`/items/${id}`);
    }

    render() {
        return (
            <div className="itemListDiv">
                <Dropdown className="filterDropdown" controlClassName="filterDropdownControl" menuClassName="filterDropdownMenu"  options={this.state.filterOptions} onChange={this.onSelect} defaultOption={this.state.filterOptions[0]} placeholder="Filter"/>
                <div className="items">
                    {this.state.itemsList.map((element) => <ListItem key={element.id} name={element.name} chooseMethod={() => {this.chooseItem(element.id)}}/> )}
                </div>
            </div>
        );
    }
}
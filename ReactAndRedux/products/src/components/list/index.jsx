import React, { Component } from "react";
import ListItem from "../listItem";
import Dropdown from "react-dropdown";
import axios from "axios";
import "react-dropdown/style.css";
import "./style.css";

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = { filterOptions: [], itemsList: [] };
    }

    componentDidMount() {
        axios.get("http://192.168.1.100:3000/api/providers", { headers: { auth: sessionStorage.getItem("key") } }).then((answer) => {    
            this.setState({ filterOptions: answer.data.map((element) => ({ value: element.id, label: element.name })) });
        });
    }

    onSelect = (selected) => {
        axios.get(`http://192.168.1.100:3000/api/providers/${selected.value}/items`, { headers: { auth: sessionStorage.getItem("key") } }).then((answer) => {    
            this.setState({ itemsList: answer.data });
        });
    } 

    chooseItem = (id) => {
        this.props.history.push(`/items/${id}`);
    }

    render() {
        return (
            <div className="itemListDiv">
                <Dropdown className="filterDropdown" controlClassName="filterDropdownControl" menuClassName="filterDropdownMenu"  options={this.state.filterOptions} onChange={this.onSelect} defaultOption={this.state.filterOptions[0]} placeholder="Filter"/>
                <div className="items">
                    {this.state.itemsList.map((element) => <ListItem key={element.id} name={element.name} description={element.description} chooseMethod={() => {this.chooseItem(element.id);}}/> )}
                </div>
            </div>
        );
    }
}
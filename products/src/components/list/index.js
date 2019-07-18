import React, {Component} from "react";
import axios from "axios";
import Drop from "./dropdown.js";
import Item from "./item.js";

export default class List extends Component{
    constructor(){
        super();
        this.state = {
            options: [],
            list: []
        };
        this.itemClick = this.itemClick.bind(this);
        this.getProviders = this.getProviders.bind(this);
        this.getItems = this.getItems.bind(this);
    }

    componentWillMount(){
        this.getProviders();
    }

    getProviders(){
        axios.get("http://192.168.1.100:3000/api/providers", {
            head: {auth: localStorage.getItem("auth")}
        }).then((response) => {
            this.setState({options: response.data});
            this.getItems(0);
        }).catch(() => {
            localStorage.removeItem("auth");
            this.props.history.push("/login");
        });
    }

    getItems(index) {
        let id = this.state.options[index].id;
        axios.get(`http://192.168.1.100:3000/api/providers/${id}/items`, {
            head: {auth: localStorage.getItem("auth")}
        }).then((response) => {
            this.setState({list: response.data});
        }).catch(() => {
            localStorage.removeItem("auth");
            this.props.history.push("/login");
        });
    }

    itemClick(id){
        this.props.history.push(`/items/${id}`);
    }

    render(){
        return (
            <div className="list">
                <Drop options={this.state.options} callback={this.getItems}/>
                {this.state.list.map((item) => 
                    <Item key={item.id} text={item.name} id={item.id} itemClick={this.itemClick} />
                )}
            </div>
        );
    }
}

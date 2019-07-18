import React, {Component} from "react";
import axios from "axios";

export default class Item extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            description: ""
        };
    }

    componentWillMount(){
        let index = this.props.history.location.pathname.split("/").pop();
        axios.get(`http://192.168.1.100:3000/api/items/${index}`, {
            head: {auth: localStorage.getItem("auth")}
        }).then((response) => {
            this.setState({
                name: response.data.name,
                description: response.data.description
            });
        }).catch(() => {
            localStorage.removeItem("auth");
            this.props.history.push("/login");
        });
    }

    render() {
        return (
            <div className="item">
                <img src="" />
                <p className="name">{this.state.name}</p>
                <p className="description">{this.state.description}</p>
            </div>
        );
    }
}

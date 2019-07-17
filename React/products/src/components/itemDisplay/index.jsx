import React, {Component} from "react";
import "./style.css";
import axios from "axios";

export default class ItemDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { imgSrc: "https://www.sciencemag.org/sites/default/files/images/3_Magneto.jpg", name: "Card", description: "Description" };
    }

    componentWillMount() {
        axios.get(`192.168.1.100:3000/api/items/${this.props.history.pathName.split("/").pop()}`, { auth: sessionStorage.getItem("key") }).then((answer) => {console.log(answer)});
    }

    render() {
        return (
            <div className="">
                <img className="itemImage" src={this.state.imgSrc} alt="Картинка"/>
                <h1 className="itemName">{this.state.name}</h1>
                <p className="itemDescription">{this.state.description}</p>
            </div>
        );
    }
}
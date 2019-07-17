import React, {Component} from "react";
import Input from "../input";
import "./style.css";

export default class Login extends Component {

    login = () => {
        this.props.history.push("/items");
    }

    render() {
        return (
            <div className="loginWindow">
                <Input ref={(input)=> { this.login = input }} placeholder="Email" email/>
                <Input ref={(input)=> { this.password = input }} placeholder="Password" password/>
                <button className="loginButton" onClick={ this.login }>Login</button>
            </div>
        );
    }
}

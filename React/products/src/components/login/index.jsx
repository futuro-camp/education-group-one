import React, {Component} from "react";
import Input from "../input";
import axios from "axios";
import "./style.css";

export default class Login extends Component {

    login = () => {
        if(this.login.valid && this.password.valid) {
            axios.post("http://192.168.1.100:3000/login", {
                login: this.login.instance.value,
                password: this.password.instance.value
            }).then((answer) => {
                if(answer.data.success) {
                    sessionStorage.setItem("key", answer.data.key);
                    this.props.history.push("/items");
                }
            });
        }
    }

    render() {
        return (
            <div className="loginWindow">
                <Input ref={(input)=> { this.login = input }} placeholder="Email" text/>
                <Input ref={(input)=> { this.password = input }} placeholder="Password" password/>
                <button className="loginButton" onClick={ this.login }>Login</button>
            </div>
        );
    }
}

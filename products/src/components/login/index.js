import React, {Component} from "react";
import axios from "axios";
import LoginInput from "./loginInput.js";

export default class LoginScreen extends Component {
    constructor(){
        super();
        this.onLogin = this.onLogin.bind(this);
    }

    componentWillMount(){
        if(localStorage.getItem("auth")){
            this.props.history.push("/items");
        }
    }

    onLogin(){
        let login = this.loginInput.input.value;
        let password = this.passwordInput.input.value;
        axios.post("http://192.168.1.100:3000/login", {
            login,
            password
        }).then((response) => {
            localStorage.setItem("auth", response.data.key);
            this.props.history.push("/items");
        });
    }

    render() {
        return(
            <div className="login-screen">
                <LoginInput email
                            ref={(input) => {
                                this.loginInput = input; 
                            }}/>
                <LoginInput password
                            ref={(input) => {
                                this.passwordInput = input;
                            }}/>
                <button onClick={this.onLogin}>
                    Log in
                </button>
            </div>
        );
    }
} 

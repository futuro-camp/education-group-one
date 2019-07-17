import React from "react";
import "./login.css";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.email) {
            return (
            <div className="login">
                <label>Email</label>
                <input className="email" type="text" autoFocus="autofocus" ref={(input) => {this.textInput = input;}}/>
            </div>
            )
        } else if (this.props.password) {
            return (
                <div className="login">
                    <label>Password</label>
                    <input className="password" type="password" ref={(input) => {this.textInput = input;}}/>
                </div>
            )
        }
    }
}

class Login extends React.Component {

    constructor() {
        super();
        this.Authorization = this.Authorization.bind(this);
    }

    Authorization() {
        // console.log(this.textEmail.textInput.value);
        // console.log(this.textPassword.textInput.value);
        this.props.history.push("/items");
    }

    render() {
        return(
            <div className="login">
                <h1>Start Working 💻</h1>
                <Input email ref={(input) => {this.textEmail = input;}}/>
                <Input password ref={(input) => {this.textPassword = input;}}/>
                <button onClick={this.Authorization}>Sign In 🪐</button>
            </div>
        )
    }

}

export default Login;

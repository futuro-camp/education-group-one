import React from "react";
import "./login.css";

function Input(props) {
    return (
        <div className="login">
            <label>{props.labelName}</label>
            <input className={props.type} type={props.type} autoFocus={props.autoFocus}/>
        </div>
    )
}

function Login() {
    return(
        <div className="login">
            <h1>Start Working 💻</h1>
            <Input labelName="Email 📬" type="email" autoFocus="autofocus"/>
            <Input labelName="Password 📜" type="password" autoFocus=""/>
            <button>Sign In 🔭</button>
        </div>
    )
}

export default Login;

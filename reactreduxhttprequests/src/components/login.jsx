import React from "react";
import "../styles/login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import { login, loginSuccess, loginFailure, email, password } from "../actions/loginActions";


const Login = (props) => {
    const { textEmail, textPassword, login, changeLogin, changePassword } = props;
    return (
        <div className="login">
        <h1>Start Working 💻</h1>
        <label htmlFor="email">Email</label>
        <input className="email" placeholder="test" onChange={(e) => email(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input className="password" placeholder="admin" onChange={(e) => password(e.target.value)} />
        <Link /*to={"api/providers"}*/>
            <button className="submit" onClick={login}>Sign In 🪐</button>
        </Link>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
}
const dispatchToProps = function(dispatch) { return ({
    login: () => dispatch (login()),
    loginSuccess: (newLogin) => dispatch(loginSuccess({newLogin})),
    loginFailure: (newPassword) => dispatch(loginFailure({newPassword})),
    email: (value) => dispatch(email(value)),
    password: (value) => dispatch(password(value))
}) };

export default connect (mapStateToProps, dispatchToProps)(Login);

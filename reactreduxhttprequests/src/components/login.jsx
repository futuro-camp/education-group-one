import React from "react";
import "../styles/login.css";
import {connect} from "react-redux";
import { login, loginSuccess, loginFailure, emailInput, passwordInput } from "../actions/loginActions";

const Login = (props) => {
    const { email, password } = props.userState;
    const { login, emailInput, passwordInput } = props;
    return (
        <div className="login">
        <h1>Start Working 💻</h1>
        <label htmlFor="email">Email</label>
        <input className="email"  defaultValue="test " onChange={(e) => {emailInput(e.target.value);}} />
        <label htmlFor="password">Password</label>
        <input className="password"  defaultValue="admin " onChange={(e) => passwordInput(e.target.value)} />
        <button className="submit" onClick={() => {login(email, password);}}>Sign In 🪐</button>
    </div>
    );
}
const mapStateToProps = (state) => {
    return {
        userState: state.userReducer
    }
};
const dispatchToProps = function(dispatch) { return ({
    login: (email, password) => dispatch (login(email, password)),
    loginSuccess: (newLogin) => dispatch(loginSuccess({newLogin})),
    loginFailure: (newPassword) => dispatch(loginFailure({newPassword})),
    emailInput: (value) => dispatch(emailInput(value)),
    passwordInput: (value) => dispatch(passwordInput(value))
});};

export default connect (mapStateToProps, dispatchToProps)(Login);

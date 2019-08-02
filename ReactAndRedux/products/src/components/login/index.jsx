import React from "react";
import Input from "../input";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import login from "../redux/actions/account";
import "./style.css";

const loginWindow = (props) => {
    return props.isLogged ? <Redirect to="/items"/> : (
        <div className="loginWindow">
            <Input placeholder="Email" isText/>
            <Input placeholder="Password" isPassword/>
            <button className="loginButton" onClick={ props.onClick }>{ props.isLoading ? "Loading..." : props.error ? `${props.error}` : "Login" }</button>
        </div>
    );
}

export default connect(
    (store) => ({
        isLogged: store.accountReducer.userLogged,
        isLoading: store.accountReducer.accountLoading,
        error: store.accountReducer.error
    }),
    (dispatcher) => ({
        onClick: () => dispatcher(login())
    })
)(loginWindow);

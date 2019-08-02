import React from "react";
import { connect } from "react-redux";
import { inputUpdate } from "../redux/actions/account";
import actions from "../redux/actions";
import "./style.css";

const input = (props) => {
    if(props.isText) {
        return <input type="text" placeholder={props.placeholder} onChange={props.onChange} name={actions.LOGIN_INPUT_UPDATE} value={props.login}/>;
    }
    else if(props.isPassword) {
        return <input type="password" placeholder={props.placeholder} onChange={props.onChange} name={actions.PASSWORD_INPUT_UPDATE} value={props.password}/>;
    }
}

export default connect(
    (store) => ({
        login: store.login,
        password: store.password
    }),
    (dispatcher) => ({
        onChange: (event) => dispatcher(inputUpdate(event))
    })
)(input);

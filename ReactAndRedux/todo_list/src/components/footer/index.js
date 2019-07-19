import React from "react";
import { connect } from "react-redux";
import {actionType, readInput, addTask } from "../redux/actions";
import "./style.css";

function Footer(props) {
    let {onKeyPress, inputValue, onChange} = props;
    return (
        <div className="footerDiv">
            <input type = "text" value={inputValue} name={actionType.CHANGE_INPUT_VALUE} placeholder = "Input List Value" onChange={onChange} onKeyPress = {onKeyPress}/>
        </div>
    );
}

const storeToProps = (store) => ({
    inputValue: store.inputValue
});

const dispatcherToProps = (dispatcher) => ({
    onKeyPress: (event) => {
        if(event.key === "Enter") {
            dispatcher(addTask());
        }
    },
    onChange: (event) => dispatcher(readInput(event))
});

export default connect(storeToProps, dispatcherToProps)(Footer);

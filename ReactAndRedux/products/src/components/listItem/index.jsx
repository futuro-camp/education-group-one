import React from "react";
import "./style.css";

export default function ListItem(props) {
    let {name, chooseMethod} = props;
    return (
        <button className="itemButton" onClick={chooseMethod}>
            <h1>{name}</h1>
        </button>
    );
}
import React from "react";
import "./style.css";

export default function ListItem(props) {
    let {name, chooseMethod} = props;
    return <button className="itemButton" onClick={chooseMethod}>{name}</button>;
}
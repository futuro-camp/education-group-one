import React from "react";
import "./style.css";


export default function Footer(props) {
    let {addToList} = props;
    return (
        <input type = "text" placeholder = "Input List Value" onKeyDown = {addToList}/>
    );
}

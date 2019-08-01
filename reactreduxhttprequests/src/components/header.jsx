import React from "react";
import "../styles/header.css";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";

function CustomButton(props) {
    return (
        <Link to={"/"}>
            <button>{props.name}</button>
        </Link>
    );
}
function Header() {
    return (
        <div className="navigation">
            <CustomButton name="Home"/>
            <CustomButton name="Contacts"/>
            <CustomButton name="About"/>
            <CustomButton name="❌LogOff "/>
        </div>
    );
}

export default Header;

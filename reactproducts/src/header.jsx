import React from "react";
import "./header.css";

function CustomButton(props) {
    return (
        <button>{props.name}</button>
    )
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

import React from "react";
import "./header.css";

const Header = ({title}) => {
    return (
        <div className="title">
            <input className="titleName" type="text" value="Schedule"/>
            <p><span> Completed </span> / In Progress</p>
        </div>
    )
}

export default Header;
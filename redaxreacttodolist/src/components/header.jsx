import React from "react";
import "./header.css";

const Header = ({title, completed, inProgress}) => {
    return (
        <div className="title">
            <input className="titleName"
                    type="text" defaultValue="" align="bottom"/>
            <p>Completed<span>   </span> / Total <span></span></p>
        </div>
    );
};

export default Header;
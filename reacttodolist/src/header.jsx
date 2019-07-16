import React from "react";
import "./header.css";

const Header = ({title, completed, inProgress}) => {
    return (
        <div className="title">
            <input className="titleName"
                    type="text" defaultValue={title} align="bottom"/>
            <p>Tasks: Completed<span>  {completed} </span> / Total <span>{inProgress}</span></p>
        </div>
    )
}

export default Header;

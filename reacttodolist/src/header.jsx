import React from "react";
import "./header.css";

const Header = ({title, completed, inProgress}) => {
    return (
        <div className="title">
            <input className="titleName"
                    type="text" defaultValue={title}/>
            <p><span> Completed {completed} </span> / Total {inProgress}</p>
        </div>
    )
}

export default Header;

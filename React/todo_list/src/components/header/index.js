import React from "react";
import "./style.css";

export default function Header(props) {
    let {complited, total} = props;
    return(
        <div className="headerDiv">
            <input type="text" placeholder="Name"/>
            <p>{complited}/{total}</p>
        </div>
    );
}

import React from "react";
import "./style.css";

function HeaderName() {
    return <input type="text" placeholder="Name"/>;
}

function HeaderCounter(props) {
    let {complited, total} = props;
    return <p>{complited}/{total}</p>;
}

export default function Header() {
    return(
        <div>
            <HeaderName />
            <HeaderCounter />
        </div>
    );
}

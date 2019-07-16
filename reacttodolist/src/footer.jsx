import React from "react";
import "./footer.css";

function TypingNewCase(props) {
    let {fnx} = props;
    return(
        <input  id="add"
                type="text"
                placeholder="What you should to do ?"
                onKeyUp={fnx}/>
    )
}

export default TypingNewCase;
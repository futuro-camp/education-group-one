import React from "react";
import "./style.css";

export default function Case(props) {
    let {name, isChecked, checkMethod, deleteMethod} = props;
    return (
        <div className="caseDiv">
            <input className="checkboxInput" type="checkbox" value={isChecked} onClick={checkMethod}/>
            <input className={isChecked ? "caseInput done" : "caseInput" } type="text" defaultValue={name} placeholder="Case"/>
            <button className="deleteButton" onClick={deleteMethod}>&times;</button>
        </div>
    );
}
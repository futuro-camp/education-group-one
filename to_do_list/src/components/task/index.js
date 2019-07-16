import React from "react";

export default function Task({id, name, status, click, remove, change}){
    return(
        <li className={status ? "li-completed" : ""}>
            <input className="status" 
                    id={`checkbox${id}`}
                    type="checkbox"
                    onClick={() => { click(id); }} 
                    defaultChecked={status}/>
            <input className={`name ${status ? "completed" : ""}`} type="text" 
                    defaultValue={name} 
                    onKeyUp={(e) => change(id, e)}/>
            <button className={status ? "btn-completed" : ""} 
                    onClick={() => { remove(id); }}>
                {"\u2613"}
            </button>
        </li>
    );
}

import React from "react";

export default function Task({name, click, remove}){
    return(
        <div>
            <input type="checkbox" onClick={click}/>
            <p>{name}</p>
            <button onClick={remove}>&#x2613;</button>
        </div>
    )
}

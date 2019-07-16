import React from "react";

export default function Footer({ addTask }){
    return (
        <div className="add-block">
            <input type="text" onKeyUp={addTask} placeholder="New task..."/>
        </div>
    );
}

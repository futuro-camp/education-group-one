import React from "react";
import Task from "../task";

export default function Content({ list, click, remove, change }) {
    return (
        <ul className="content">    
            {list.map((task) => <Task key={task.id} id={task.id} name={task.name} status={task.status} click={click} remove={remove} change={change} />)}
        </ul>
    );
};

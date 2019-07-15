import React from "react";
import Task from "../task";

export default function Content({ list }) {
    return (
        <div>
            {list.map((task) => <Task name={task.name} status={task.status} />)};
        </div>
    );
}

import React from "react";
import { connect } from "react-redux";
import {    CHANGE_TASK_TITLE,
            REMOVE_TASK,
            CHANGE_STATUS,
            changeTaskTitle, 
            changeByIndex } from "../../actions";


const Task = ({id, name, status, onChange, onCheckChange, onRemove}) => (
    <li className={status ? "li-completed" : ""}>
        <input  className="status" 
                name={CHANGE_STATUS}
                onChange={(e) => onCheckChange(e, id)}
                type="checkbox"
                />
        <input  className={`name ${status ? "completed" : ""}`} 
                type="text"
                onChange={(e) => onChange(e, id)} 
                onKeyUp={(e) => {
                    if(e.key === "Enter"){
                        e.target.blur();
                    }
                }}
                name={CHANGE_TASK_TITLE}
                value={name} />
        <button className={status ? "btn-completed" : ""} 
                name={REMOVE_TASK}
                onClick={(e) => onRemove(e, id)}>
            {"\u2613"}
        </button>
    </li>
);

export default connect(
    null,
    (dispatch) => ({
        onChange: (e, id) => dispatch(changeTaskTitle(e, id)),
        onCheckChange: (e, id) => dispatch(changeByIndex(e, id)),
        onRemove: (e, id) => dispatch(changeByIndex(e, id))
    })
)(Task);

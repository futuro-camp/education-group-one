import React from "react";
import { actionType, actionById, changeTaskTitle } from "../redux/actions";
import "./style.css";
import { connect } from "react-redux";

function Case(props) {
    let {id, name, isChecked, checkMethod, deleteMethod, onChange} = props;
    return (
        <div className="caseDiv">
            <input className="checkboxInput" type="checkbox" onClick={(event) => {checkMethod(event, id)}} name={actionType.CHECK}/>
            <input className={isChecked ? "caseInput done" : "caseInput" } name={actionType.CHANGE_TASK}  type="text" defaultValue={name} onChange={(event) => {onChange(event, id)}} placeholder="Case"/>
            <button className="deleteButton" name={actionType.REMOVE_TASK} onClick={(event) => {deleteMethod(event, id)}}>&times;</button>
        </div>
    );
}

const dispatcherToProps = (dispatcher) => ({
    checkMethod: (event, id) => dispatcher(actionById(event, id)),
    deleteMethod: (event,id) => dispatcher(actionById(event, id)),
    onChange: (event, id) => dispatcher(changeTaskTitle(event, id))
});

export default connect(null, dispatcherToProps)(Case);

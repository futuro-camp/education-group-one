import React from "react";
import { connect } from "react-redux";
import { CHANGE_INPUT_VALUE, changeInput, addTask} from "../../actions";

const Footer = ({ addTask, onChange, inputValue }) => (
    <div className="add-block">
        <input  type="text" 
                name={CHANGE_INPUT_VALUE}
                onKeyUp={(e) => {
                    if(e.key === "Enter"){
                        addTask();
                    }
                }} 
                onChange={(e) => onChange(e)}
                value={inputValue}
                placeholder="New task..."/>
    </div>
);

export default connect(
    (state) => ({
        inputValue: state.inputValue
    }),
    (dispatch) => ({
        onChange: (e) => dispatch(changeInput(e)),
        addTask: () => dispatch(addTask())
    })
)(Footer);

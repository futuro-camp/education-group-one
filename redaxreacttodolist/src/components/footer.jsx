import React from "react";
import "./footer.css";
import { connect } from "react-redux";
import { changeInputValue, addNewTask } from "../actions";

function TypingNewCase(props) {
    const {inputValue, submit, changeInputValue} = props;
    const handlePress = (e)=>{
      if(e.key==="Enter"){
        submit();
        changeInputValue("");
      }
    }
    return(
        <input  id="add"
                type="text"
                placeholder="What you should to do ? (Press Enter)"
                value = {inputValue}
                onChange={(e) => changeInputValue(e.target.value)}
                onKeyPress={handlePress}
                />
    );
}
//Implemented states-data (which is a storage) to Component's props
const mapStateToProps = (state) => ({
    inputValue: state.inputValue
});
  //Implemented states-functions (which is action ) to Component's props
const dispatchToProps = (dispatch) => ({
  changeInputValue : (newInputValue) => dispatch(changeInputValue(newInputValue)),
  submit : () => dispatch(addNewTask())
});
  //Connecting these to the Card-Component and export this Component
export default connect(mapStateToProps, dispatchToProps)(TypingNewCase);

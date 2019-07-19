import React from "react";
import "./footer.css";
import { connect } from "react-redux";

function TypingNewCase(props) {
    let {fnx} = props;
    return(
        <input  id="add"
                type="text"
                placeholder="What you should to do ? (Press Enter)"
                onKeyUp={fnx}/>
    );
}

//Implemented states-data (which is a storage) to Component's props
const mapStateToProps = (state) => ({
    inputValue: state.inputValue
});
  //Implemented states-functions (which is action ) to Component's props
const dispatchToProps = (dispatch) => ({

});
  //Connecting these to the Card-Component and export this Component
export default connect(mapStateToProps, null)(TypingNewCase);
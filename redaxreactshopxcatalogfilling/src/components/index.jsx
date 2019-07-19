import React from "react";
import {connect} from "react-redux";
import { removeItem } from "../actions";

function Card(props) {
    //We assign a function on event-onClick, which calls another function(id) which do "removing"
    return (
        <div>
            <li key={props.id} id={props.id}>{props.name} {props.price} {props.discount}</li>
            <button onClick={function() {props.onClickRemove(props.id)}}>Remove</button>
        </div>
    )
}

//Implemented states-data (which is a storage) to Component's props
const stateToProps = (state) => ({
    // Not need in this Component
});
  //Implemented states-functions (which is action ) to Component's props
const dispatchToProps = (dispatch) => ({
    onClickRemove: (id) => dispatch(removeItem(id))
});
  //Connecting these to the Card-Component and export this Component
export default connect(null, dispatchToProps)(Card);

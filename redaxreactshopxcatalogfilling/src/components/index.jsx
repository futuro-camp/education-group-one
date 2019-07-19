import React from "react";
import "./index.css";
import {connect} from "react-redux";
import { removeItem } from "../actions";

function Card(props) {
    //We assign a function on event-onClick, which calls another function(id) which do "removing"
    return (
        // <div className="card">
        //     <li key={props.id} id={props.id}>{props.name} {props.price} {props.discount}</li>
        //     <button onClick={function() {props.onClickRemove(props.id)}}>Remove</button>
        // </div>
        <div className="card">
        <div className="header">
            <div className="icons">
                <button id="list"></button>
                <button id="like"></button>
                <button id="compare"></button>
            </div>
            <div className="photo">
            </div>
        </div>
        <div className="sectionBody">
            <div className="text">
                <p className="itemTitle">{props.name}</p>
                <div className="priceRow">
                    <p className="itemOldPrice">{props.price}$</p>
                    <p className="itemNewPrice">    {props.discount}$</p>
                </div>
            </div>
        </div>
        <div className="footer">
            <button className="addToCart">
                <div className="basketImg"></div>
                <div className="buttonTitle">
                    <p>Add to cart</p>
                </div>
            </button>
            <button className="removeFromCart" onClick={function() {props.onClickRemove(props.id)}}>;
                <div className="buttonTitle">
                    <p>Remove</p>
                </div>
            </button>
        </div>
    </div>
    );
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

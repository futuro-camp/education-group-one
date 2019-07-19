import React from "react";
import { connect } from "react-redux";
import { removeFromList } from "../actions";
import cartIcon from "../../img/cart.svg";

const Card = (props) => (
    <div className="card">
    <div className="card_header">
        <ul>
            <li><button className="menu"></button></li>
            <li><button className="like"></button></li>
            <li><button className="add_to"></button></li>
        </ul>
        <img src="" alt="" />
    </div>
    <div className="card_body">
        <p className="text">{props.text}</p>
        <p className="oldPrice">{props.oldPrice}</p>
        <p className="curPrice">{props.curPrice}</p>
    </div>
    <button className="card_btn_add">
        <img src={cartIcon} alt="" />
        <p>Add to cart</p>
    </button>
    <button className="card_btn_remove" onClick={() => { props.onClick(props.id); }}>
        Remove
    </button>
</div>
);

export default connect(null,
    (dispatch) => ({
        onClick: (id) => dispatch(removeFromList(id))
    }))(Card);

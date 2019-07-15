import React from "react";
import cartIcon from "../img/cart.svg";

const Card = ({id, text, oldPrice, curPrice, remove}) => {
    return (
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
                <p className="text">{text}</p>
                <p className="oldPrice">{oldPrice}</p>
                <p className="curPrice">{curPrice}</p>
            </div>
            <button className="card_btn_add">
                <img src={cartIcon} alt="" />
                <p>Add to cart</p>
            </button>
            <button className="card_btn_remove" onClick={remove(id)}>
                Remove
            </button>
        </div>
    );
};

export default Card;
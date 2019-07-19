import React from "react";
import { connect } from "react-redux";
import {    CHANGE_NAME,
            CHANGE_OLD_PRICE,
            CHANGE_CURRENT_PRICE,
            addToList, 
            changeInput } from "../actions";
import Card from "../card";


const CardWrapper = (props) => (
    <div className="card-wrapper">
        <div className="card-wrapper_menu">
            <input  className="name-input" 
                    type="text" 
                    name={CHANGE_NAME} 
                    value={props.name}
                    onChange={(e) => { props.onChange(e) }}
                    placeholder="name" />
            <input  className="old-price-input" 
                    type="number" 
                    name={CHANGE_OLD_PRICE}
                    value={props.oldPrice}
                    onChange={(e) => { props.onChange(e) }} 
                    placeholder="old price" />
            <input  className="cur-price-input" 
                    type="number" 
                    name={CHANGE_CURRENT_PRICE} 
                    value={props.curPrice}
                    onChange={(e) => { props.onChange(e) }}
                    placeholder="current price" />
            <button className="add-card-btn" 
                    onClick={props.onClick}
                    >Add</button>
        </div>
        <div className="card-wrapper_content">
            {props.list.map((card) => <Card key={card.id} id={card.id} text={card.name} oldPrice={card.oldPrice} curPrice={card.curPrice} />)}
        </div>
    </div>
);

export default connect(
    (state) => ({
        name: state.name,
        oldPrice: state.oldPrice,
        curPrice: state.curPrice,
        list: state.list
    }),
    (dispatch) => ({
        onClick: () => dispatch(addToList()),
        onChange: (e) => dispatch(changeInput(e))
    })
)(CardWrapper);

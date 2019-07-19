import React from "react";
import Card from "../card";
import cardImage from "../../image/cardImage.jpg";
import { actionType, addToList, changeInputValue } from "../redux/actons";
import { connect } from "react-redux";

const wrapper = (props) => {

    return (
        <div className="App">
        <div className="inputs">
          <input className="valueInput" onChange = { props.onChange} type="text" placeholder="Card Name" name={actionType.NAME_CHANGE} value={props.name}/>
          <input className="valueInput" onChange = { props.onChange} type="number" placeholder="Card Old Price" name={actionType.OLD_PRICE_CHANGE} value={props.oldPrice}/>
          <input className="valueInput" onChange = { props.onChange} type="number" placeholder="Card New Price" name={actionType.CURRENT_PRICE_CHANGE} value={props.currentPrice}/>
          <input className="submitInput" onClick = { props.onClick } type="submit" value="Add Card"/>
        </div>
        <div className="cards">
          { props.cards.map((element) => <Card key={element.id} id={element.id} cardImage = {cardImage} cardName = {element.name} price = {{ old: element.oldPrice, current: element.currentPrice }}/>)}
        </div>
      </div>
    );
}

const stateToProps = (state) => ({
    cards: state.cards,
    name: state.name,
    oldPrice: state.oldPrice,
    currentPrice: state.currentPrice,
    lastIndex: state.lastIndex
  });
  
const dispatchingToProps = (dispacher) => ({
    onClick: () => dispacher(addToList()),
    onChange: (event) => dispacher(changeInputValue(event))
});

export default connect(stateToProps, dispatchingToProps)(wrapper);
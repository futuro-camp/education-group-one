import React, {Component} from "react";
import "./App.css";
import Card from "./components/Card";
import cardImage from "./image/cardImage.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], id: 0 };
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  addCard() {
    this.setState(
      { 
        cards: [
          ...this.state.cards, 
          <Card 
            key = {this.state.id}
            cardImage = {cardImage} 
            cardName = {this.name.value} 
            price = {{
              old: "$"+this.oldPrice.value,
              current: "$"+this.currentPrice.value 
            }}
            deleteMethod = {this.removeCard(this.state.id)}
          />
        ], 
        id: this.state.id + 1 
      }
    );
  }

  removeCard(cardKey) {
    return () => {
      let cardsArray = this.state.cards;
      cardsArray.splice(this.state.cards.map((x) => x.key).indexOf(cardKey), 1);
      this.setState({ cards: cardsArray, id: this.state.id });
    };
  }

  render() {
    return (
      <div className="App">
        <div className="inputs">
          <input className="valueInput" ref = {(input) => { this.name = input; }} type="text" placeholder="Card Name"/>
          <input className="valueInput" ref = {(input) => { this.oldPrice = input; }} type="number" placeholder="Card Old Price"/>
          <input className="valueInput" ref = {(input) => { this.currentPrice = input; }} type="number" placeholder="Card New Price"/>
          <input className="submitInput" onClick = { this.addCard } type="submit" value="Add Card"/>
        </div>
        <div className="cards">
          {this.state.cards}
        </div>
      </div>
    );
  }
}

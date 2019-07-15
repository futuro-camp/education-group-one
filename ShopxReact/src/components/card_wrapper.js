import React, {Component} from "react";
import Card from "./card.js";

export default class CardWrapper extends Component {

    constructor(){
        super();
        this.indexCount = 0;
        this.state = {cards: []};
        this.addCard = this.addCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }
    
    addCard() {
        this.setState({cards: [...this.state.cards, 
                            {
                                key: this.indexCount, 
                                name: this.name.value, 
                                oldPrice: "$" + this.oldPrice.value, 
                                curPrice: "$" + this.curPrice.value
                            }]
                        });
        this.indexCount++;
        this.name.value = "";
        this.oldPrice.value = "";
        this.curPrice.value = "";
    }

    removeCard(id) {
        return () => {
            let array = this.state.cards.filter((x) => x.key !== id);
            this.setState({cards: array});
        };
    }

    render() {
        return (
            <div className="card-wrapper">
                <div className="card-wrapper_menu">
                    <input className="name-input" type="text" ref={(i) => this.name = i} placeholder="name" />
                    <input className="old-price-input" type="number" ref={(i) => this.oldPrice = i} placeholder="old price" />
                    <input className="cur-price-input" type="number" ref={(i) => this.curPrice = i} placeholder="current price" />
                    <button className="add-card-btn" onClick={this.addCard}>Add</button>
                </div>
                <div className="card-wrapper_content">
                    {this.state.cards.map((x) => <Card key={x.key} id={x.key} text={x.name} oldPrice={x.oldPrice} curPrice={x.curPrice} remove={this.removeCard} />)}
                </div>
            </div>
        );
    }
}
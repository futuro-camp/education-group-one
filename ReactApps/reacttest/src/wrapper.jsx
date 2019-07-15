
import React, {Component} from "react";
import ItemCard from "./card";

class Wrapper extends Component {

    constructor(props) {
        super(props);
        this.id = 0;
        this.state = {data: []};
        //Bind clickEvent to this component
        this.handleClick = this.handleClick.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
    }
    handleClickRemove(id){
        const {data} = this.state;
        const updatedArray = data.filter((element) => id !== element.id);
        this.setState({data:updatedArray});
    }
    //Transfer object (input) with all own props and values
    handleClick(){
        this.id++;
        this.setState({data: [...this.state.data, {title: this.name.value,
                                                    oldPrice: this.price.value,
                                                    newPrice: this.discount.value,
                                                    id: this.id,
                                                    key: this.id}]});
    }
    render() {
        return (
            <div id="main">
                <div className="input-box">
                    <label htmlFor="title">Name of Product</label>
                    <input type="text" onChange={this.handleChange} ref={(title) => this.name = title} id="title" placeholder="title"/>
                    <label htmlFor="oldPrice">Old Price</label>
                    <label htmlFor="newPrice">Current price with a discount</label>
                    <input type="text" onChange={this.handleChange} ref={(oldPrice) => this.price = oldPrice} id="oldPrice" placeholder="oldPrice"/>
                    <input type="text" onChange={this.handleChange} ref={(newPrice) => this.discount = newPrice} id="newPrice" placeholder="newPrice"/>
                    <button id="add" onClick={this.handleClick}>Append</button>
                </div>
                <div className="catalog">
                    {this.state.data.map((element) => <ItemCard title={element.title}
                                                                oldPrice={element.oldPrice}$
                                                                newPrice={element.newPrice}$
                                                                id={element.id}
                                                                key={element.id}
                                                                remove={this.handleClickRemove}/>)}
                </div>
            </div>
        );
    }
}

export default Wrapper;

import React, {Component} from "react";

class ItemCard extends Component {
    constructor(props){
        super(props);
        // this.props = {
        //     title: "name",
        //     oldPrice: "price",
        //     newPrice: "newPrice"
        // };
    }

    render(){
        let {title, oldPrice, newPrice, remove, id } = this.props;
        return(
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
                        <p className="itemTitle">{title}</p>
                        <div className="priceRow">
                            <p className="itemOldPrice">{oldPrice}$</p>
                            <p className="itemNewPrice">    {newPrice}$</p>
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
                    <button className="removeFromCart" onClick={() => remove(id)}>
                        <div className="buttonTitle">
                            <p>Remove</p>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default ItemCard;

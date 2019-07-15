import React, {Component} from "react";

class ItemCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Название",
            oldPrice: "цена",
            newPrice: "цена"
        };
    }

    componentWillMount(){
        const {title, id} = this.props;
        console.log("im card im rendered "+ `${title}: ${id}`)
    }

    render(){
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
                        <div>
                            <p className="itemTitle">{this.props.title}</p>
                        </div>
                        <div className="priceRow">
                            <p className="itemOldPrice">{this.props.oldPrice}$</p>
                            <p className="itemNewPrice">    {this.props.newPrice}$</p>
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
                    <button className="removeFromCart" onClick={() => this.props.delete(this.props.id)}>
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
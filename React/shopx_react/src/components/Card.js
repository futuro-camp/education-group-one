import React, {Component} from "react";
import addToCompareListIcon from "../icons/addToCompareList.svg";
import likeIcon from "../icons/likeIcon.svg";
import filterIcon from "../icons/filterIcon.svg";
import cartIcon from "../icons/cartIcon.svg";
import "./CardStyle.css";


function CardMenuButton(props) {
    return (
        <button>
            <img src={props.icon} alt="Menu Button"/>
        </button>
    )
}

class CardMenuLikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return (
            <button>
                <img src={ likeIcon } alt="Like"/>
            </button>
        )
    }
}

function CardMenu(props) {
    return(
        <div className="cardMenu">
            <CardMenuButton icon = {filterIcon}/>
            <CardMenuLikeButton/>
            <CardMenuButton icon = {addToCompareListIcon}/>
        </div>
    )
}

function CardImage(props) {
    return <img className="cardImage" src={ props.cardImage } alt="CardImage"/>;
}

function CardHeader(props) {
    return (
        <div className="cardHeader">
            <CardMenu/>
            <CardImage cardImage={props.cardImage}/>
        </div>
    )
}

function CardContent(props) {
    return (
        <div className="cardContent">
            <h1 className="heading">{props.cardName}</h1>
            <p className="currentPrice"><span className="oldPrice">{props.price.old}</span>{props.price.current}</p>
        </div>
    )
}

function CardFooter(props) {
    return (
        <button className="cardFooter">
            <img src={cartIcon} alt="Cart"/>
            <p>Add To cart</p>
        </button>
    )
}

function CardDeleteButton(props) {
    return <button onClick = {props.deleteMethod} className="removeButton">Remove</button>;
}

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <CardHeader cardImage={this.props.cardImage}/>
                <CardContent cardName={this.props.cardName} price={this.props.price}/>
                <CardFooter/>
                <CardDeleteButton deleteMethod={this.props.deleteMethod}/>
            </div>
        );
    }
}
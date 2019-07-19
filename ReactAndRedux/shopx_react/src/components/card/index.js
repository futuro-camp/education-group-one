import React, {Component} from "react";
import addToCompareListIcon from "../../icons/addToCompareList.svg";
import likeIcon from "../../icons/likeIcon.svg";
import filterIcon from "../../icons/filterIcon.svg";
import cartIcon from "../../icons/cartIcon.svg";
import { connect } from "react-redux";
import { removeFromList } from "../redux/actons";
import "./style.css";


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

function CardMenu() {
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
    let {cardName, price} = props;
    let {old, current} = price;
    return (
        
        <div className="cardContent">
            <h1 className="heading">{cardName}</h1>
            <p className="currentPrice"><span className="oldPrice">{old}</span>{current}</p>
        </div>
    )
}

function CardFooter() {
    return (
        <button className="cardFooter">
            <img src={cartIcon} alt="Cart"/>
            <p>Add To cart</p>
        </button>
    )
}

function CardDeleteButton(props) {
    return <button onClick = {props.onClick} className="removeButton">Remove</button>;
}

function Card(props) {
    let {cardImage, cardName, price, id} = props;
    return (
        <div className="card">
            <CardHeader cardImage={cardImage}/>
            <CardContent cardName={cardName} price={price}/>
            <CardFooter/>
            <CardDeleteButton onClick={()=>{props.onClick(id)}}/>
        </div>
    );
}

const dispatchToProps = (dispacher) => ({
    onClick: (id) => dispacher(removeFromList(id))
});

export default connect(null, dispatchToProps)(Card);

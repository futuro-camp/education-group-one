import React, {Component} from "react";
import "./style.css";
import { connect } from "react-redux";
import { itemRequest } from "../redux/actions/items";

class ItemDisplay extends Component {

    componentDidMount() {
        this.props.onMount(this.props.history.location.pathname.split("/").pop());
    }

    render() {
        return ( this.props.isLoading ? 
            <div>Loading...</div> :
            this.props.error ? <div>{`${this.props.error}`}</div> :
            <div className="itemDisplay">
                <img className="itemImage" src="https://www.sciencemag.org/sites/default/files/images/3_Magneto.jpg" alt="Картинка"/>
                <h1 className="itemName">{this.props.item.name}</h1>
                <p className="itemDescription">{this.props.item.description}</p>
            </div>
        );
    }
}

export default connect(
    (store) => ({
        item: store.itemsReducer.item,
        isLoading: store.itemsReducer.itemLoading,
        error: store.accountReducer.error
    }),
    (dispach) => ({
        onMount: (id) => {dispach(itemRequest(id))}
    })
)(ItemDisplay);

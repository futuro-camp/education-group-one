import React, { useEffect} from "react";
import { connect } from "react-redux";
import "../styles/itemsId.css";
import { choosenProduct } from "../actions/productActions";
import { browserHistory } from "../App";

const ItemsId = (props) => {
    useEffect( () => {
        let id = browserHistory.location.pathname.split("/").pop();
        props.choosenProduct(id);
    }, [])

    return (
        <div className="itemsId">
            <h1>Item with own id</h1>
            <h2> {props.title} </h2>
            <img src="https://programmingwithmosh.com/wp-content/uploads/2017/06/mosh-300px.png"/>
            <h3> {props.body} </h3>
        </div>
    );
}

const mapStateToProps = ({productReducer}) => { return { title: productReducer.title, body: productReducer.body } }
const dispatchToProps = (dispatch) => { return ( {
    choosenProduct: (id) => { dispatch( choosenProduct(id) ) }
} ) };
export default connect (mapStateToProps, dispatchToProps)(ItemsId);

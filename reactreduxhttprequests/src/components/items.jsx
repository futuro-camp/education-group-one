import React, { useEffect} from "react";
import "../styles/items.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { connect } from "react-redux";
import { dropdownList, getItems } from "../actions/categoriesActions";
import { browserHistory } from "../App";

const OneItem = (props) => {
    return (
        <button className="item" onClick={() => { browserHistory.push(`/items/${props.id}`) } }>
            {props.title}
        </button>
    )
}
const Items = ({dropdownList, getItems, categories, items}) => {
    useEffect( () => {
        dropdownList();
    }, [])

    return (
        <div>
            <h1>Categories</h1>
            <Dropdown
                placeholder="Select category"
                options={
                    categories.map( (el) => {
                        return { value:el.id, label:el.name }
                    })
                }
                onChange={ (value) => { getItems(value) } }
                className="DropDown"
            />
            <div className="itemsList">
                <h1>Catalog:</h1>
                {items.map( (obj) => {
                    return <OneItem key={obj.id} id={obj.id} title={obj.name} />
                }) }
            </div>
        </div>
    )
}

const mapStateToProps = ({categoryReducer}) => { return { categories: categoryReducer.categories, items: categoryReducer.items } }
const dispatchToProps = (dispatch) => { return ( {
    dropdownList: () => { dispatch( dropdownList() ) },
    getItems: (value) => { dispatch( getItems(value) ) }
} ) };
export default connect (mapStateToProps, dispatchToProps)(Items);

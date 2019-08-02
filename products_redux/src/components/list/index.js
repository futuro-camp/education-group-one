import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories, getItems } from "../../actions";

const List = ({categories, items, getCategories, getItems}) => {

    useEffect(() => {
        getCategories();
    }, [getCategories]);
    
    return(
        <div className="list">
            <div className="list_dropdown">
                <select onChange={(e) => { 
                    e.target.options[0].disabled = "disabled";
                    getItems(e.target.options[e.target.selectedIndex].value); 
                } }>
                        <option key={-1}>Select Category</option>
                    {categories.map((category) => 
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    )}
                </select>
            </div>
            {items.map((item) => 
                <Link   key={item.id}
                        className="link"
                        to={`/items/${item.id}`}>
                    {item.name}
                </Link>
            )}
        </div>
    );
};

export default connect(
    (state) => ({
        categories: state.pageReducer.categories,
        items: state.pageReducer.items
    }),
    (dispatch) => ({
        getCategories: () => { dispatch(getCategories()); },
        getItems: (id) => { dispatch(getItems(id)); },
    })
)(List);

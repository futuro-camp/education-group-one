import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../actions";
import "../../style/categories.scss";

const Categories = (props: any) => {

    useEffect(() => {
        props.getCategories();
    }, []);

    return(
        <div className="categories">
            <h1 className="categories-headline">Categories:</h1>
            <div className="categories-inner">
                {props.categories.map((element: any) => (<p>{element.title}</p>))}
            </div>
        </div>
    ); 
}

export default connect(
    (state: any) => ({
        categories: state.categories
    }),
    (dispatch) => ({
        getCategories: () => { dispatch(getCategories()); }
    })
)(Categories);

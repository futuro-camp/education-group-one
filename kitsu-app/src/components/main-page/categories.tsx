import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { history } from "../../constants";
import { getCategories } from "../../actions";
import "../../style/categories.scss";

const Categories = (props: any) => {

    useEffect(() => {
        props.getCategories();
    }, []);

    return(
        <div className="categories">
            <Link className="all-headline" to={"/app"}>All</Link>
            <h1 className="categories-headline">Categories:</h1>
            <div className="categories-inner">
                {props.categories.map((element: any) => (
                    <Link key={element.id} to={{
                        pathname: `${history.location.pathname.includes("categories") ? `${history.location.pathname}` : `${history.location.pathname}/categories`}`,
                        search: `id=${element.id}`
                    }}>{element.title}</Link>
                ),)}
            </div>
        </div>
    ); 
}

export default connect(
    (state: any) => ({
        categories: state.categories
    }),
    (dispatch) => ({
        getCategories: () => { dispatch(getCategories()); },
    })
)(Categories);

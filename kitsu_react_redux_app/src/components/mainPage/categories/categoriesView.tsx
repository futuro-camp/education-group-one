import React, { Component } from "react";
import { connect } from "react-redux";
import { requestCategories } from "../../../redux/cathegories/actions";
import Category from "./category";
import "../../../styles//mainPage/categories/categoriesView.scss";

function mapStateToProps(state: any) {
    let { categories, isLoaded, errorMessage } = state.categories;
    return {
        categories: categories,
        isLoaded: isLoaded,
        errorMessage: errorMessage
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        onMount: () => dispatch(requestCategories())
    };
}

class categoriesView extends Component<any> {

    componentDidMount() {
        this.props.onMount();
    }

    render() {
        return (
            <div className="categories-view">
                <h1 className="heading">Categories</h1>
                {this.props.isLoaded ? <ul className="categories-list">
                    {this.props.categories.map((element: any) => <Category key={element.id} name={element.name} description={element.description} slug={element.slug} />)}
                </ul> : this.props.errorMessage? <div className="error"><h1 className="text">Error</h1></div> : <div className="loading"><h1 className="text">Loading...</h1></div>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(categoriesView);
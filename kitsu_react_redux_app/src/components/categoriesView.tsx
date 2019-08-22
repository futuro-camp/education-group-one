import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCategories } from "../redux/cathegories/actions";
import { requestAnimeByCategoty } from "../redux/anime/actions";
import "../styles/categoriesView.scss";

interface Props {
    categories: any;
    isLoaded: boolean;
    errorMessage: string;
    onMount: () => void;
    onCategoryChoose: (arg: string) => void
}

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
        onMount: () => dispatch(requestCategories()),
        onCategoryChoose: (categorySlug: string) => dispatch(requestAnimeByCategoty(categorySlug))
    };
}

class categoriesView extends Component<Props> {

    componentDidMount() {
        this.props.onMount();
    }
    render() {
        return (
            <div className="categories-view">
                {this.props.isLoaded ? <ul className="categories-list">
                    {this.props.categories.map((element: any) => <li key={element.id} className="category"><button onClick={()=>{this.props.onCategoryChoose(element.slug)}}>{element.name}</button><div className="description">{element.description}</div></li>)}
                </ul> : <div className="loading">Loading</div>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(categoriesView);
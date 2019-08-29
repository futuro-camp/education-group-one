import React, { Component } from "react";
import { connect } from "react-redux";
import Pagination from "./pagination";
import { requestAnimeByCategory } from "../../../redux/anime/actions";
import AnimeCard from "./animeCard";
import "../../../styles/mainPage/animeList/animeListStyle.scss";

function mapStateToProps(state: any) {
    let { anime, errorMessage, isLoaded } = state.anime;
    return {
        anime,
        errorMessage, 
        isLoaded
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        onCategoryChange: (object: any) => dispatch(requestAnimeByCategory(object))
    };
}

class animeListView extends Component<any> {

    componentDidMount() {
        this.props.onCategoryChange({ category: this.props.match.params.cathegoryName, offset: this.props.match.params.offset });
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.cathegoryName !== prevProps.match.params.cathegoryName || this.props.match.params.offset !== prevProps.match.params.offset) {   
            this.props.onCategoryChange({ category: this.props.match.params.cathegoryName, offset: this.props.match.params.offset });
        }
    }

    render() {
        return (
            <div className="animeView">
                {/* <h1 className="heading">{this.props.anime}</h1> */}
                {this.props.isLoaded ? <ul className="anime-list">
                    {this.props.anime.map((element: any) => <AnimeCard key={element.id} id={element.id} posterImage={element.posterImage} title={element.title} rank={element.rank} rating={element.rating} synopsis={element.synopsis} />)}
                </ul> : this.props.errorMessage? <div className="error"><h1 className="text">Error</h1></div> : <div className="loading"><h1 className="text">Loading...</h1></div>}
                <Pagination/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(animeListView);
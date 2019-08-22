import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../styles/animeListStyle.scss";

interface Props {
    anime: any;
    isLoaded: boolean;
    errorMessage: string;
    // onChoose: (arg: any) => void;
}

function mapStateToProps(state: any) {
    let { anime, errorMessage, isLoaded } = state.anime;
    return {
        anime,
        errorMessage, 
        isLoaded
    };
}

class animeListView extends Component<Props> {
    render() {
        console.log(this.props.anime);
        return (
            <div className="animeView">
                {this.props.isLoaded ? <ul className="anime-list">
                    {this.props.anime.map((element: any) => <li key={element.id} className="anime-card"><button><img className="posterImage" src={element.posterImage.medium} alt=""/></button><div className="description">{element.synopsis}</div></li>)}
                </ul> : <div className="loading">Loading</div>}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(animeListView);
import React, { Component } from "react";
import { connect } from "react-redux";
import { requestAnimeDetails } from "../../redux/animeDetails/actions";
import "../../styles/animeDetails/animeDetails.scss";

function mapStateToProps(state: any) {
    let { animeData, isLoaded, errorMessage } = state.animeDetails;
    return {
        animeData,
        isLoaded,
        errorMessage
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        onMount: (animeId: any) => dispatch(requestAnimeDetails(animeId))
    };
}

class animeDeatails extends Component<any> {

    componentDidMount() {
        this.props.onMount(this.props.match.params.id);
    }

    render() {
        let { coverImage, posterImage, canonicalTitle, youtubeVideoId, synopsis, showType, status, ratingRank, popularityRank } = this.props.animeData;
        return (
            <div className="anime-details">
                {this.props.isLoaded? <div className="anime-details-view">
                    <div className="cover-image">
                        {coverImage? <img src={coverImage} alt="cover" className="image"/> : <div className="image">No cover</div> }
                        <h1 className="title">{canonicalTitle}</h1>
                    </div>
                    <div className="anime-info">
                        {posterImage? <img src={posterImage} alt="" className="posterImage"/> : <div className="posterImage">No Image</div> }
                        <div className="show-info">
                            <h1 className="type">Showed on: {showType}</h1>
                            <h1 className="status">Status: {status}</h1>
                            <div className="rating">
                                <p className="rank"><span role="img">Rank 📈:</span> {ratingRank}</p>
                                <p className="popularity"><span role="img">Popularity ❤:</span> {popularityRank}</p>
                            </div>
                        </div>
                        {youtubeVideoId? <iframe title="Ky" className="video" width="640" height="420" src={`https://www.youtube.com/embed/${youtubeVideoId}?controls=0`}></iframe> : null}
                        <p className="description">{synopsis}</p>

                    </div>
                </div> : this.props.errorMessage? <div className="error"><h1 className="text">Error</h1></div> : <div className="loading"><h1 className="text">Loading...</h1></div> }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(animeDeatails);
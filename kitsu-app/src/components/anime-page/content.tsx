import React from "react";
import { connect } from "react-redux";
import "../../style/anime-content.scss";

// TODO: {(props.anime && props.anime.averageRatingn) && <p>Rating ${props.anime.averageRating}</p>}

const Content = (props: any) => {
    console.log(props.anime);
    return (
        <div className="anime-content">
            <div className="left-bar">
                    <img src={props.anime ? props.anime.image : "https://www.qoo10.sg/gmkt.inc/Img/noImage.png"} alt="" />
                    <p>{props.anime ? props.anime.averageRating ? `Rating: ${props.anime.averageRating}` : "" : "" }</p>
                    <p>{props.anime ? props.anime.popularityRank ? `Rank: ${props.anime.popularityRank}` : "" : "" }</p>
            </div>
            <div className="main-bar">
                <div>
                    <p>{props.anime ? props.anime.ageRating ? `Age rating: ${props.anime.ageRating}` : "" : ""}</p>
                    <p className="date">{props.anime ? props.anime.startDate ? `Start date: ${props.anime.startDate}` : "" : ""}</p>
                    <p className="date">{props.anime ? props.anime.endDate ? `End date: ${props.anime.endDate}` : "" : ""}</p>
                    <p>{props.anime ? props.anime.episodeCount ? `Episodes: ${props.anime.episodeCount}` : "" : ""}</p>
                    <p>{props.anime ? props.anime.episodeLength ? `Episode length: ${props.anime.episodeLength} min` : "" : ""}</p>
                    <p>{props.anime ? props.anime.showType ? `Type: ${props.anime.showType}` : "" : ""}</p>
                    <p>{props.anime ? props.anime.status ? `Status: ${props.anime.status}` : "" : ""}</p>
                    <p>{props.anime ? props.anime.description ? `Description: ${props.anime.description.split("[")[0]}` : "" : ""}</p>
                    {props.anime ? props.anime.youtube ?
                        <div className="youtube">
                            <p>Trailer:</p> 
                            <iframe src={`https://www.youtube.com/embed/${props.anime.youtube}?autoplay=1   `}></iframe> 
                        </div>
                    : null : null}

                </div>
            </div>
        </div>
    );

};

export default connect(
    (state: any) => ({
        anime: state.anime[0]
    })
)(Content);

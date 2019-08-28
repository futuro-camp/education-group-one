import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/singleAnime.scss";
import { getSingleSuccess, getSingle }  from "../actions/index";
import { history } from "../index";


const SingleAnime = (props:any) => {
    let { mainPage } = props;
    let {singleAnime } = mainPage;
    let {attributes, id, links, type, relationships } = singleAnime;

    useEffect( () => {
        let path = history.location.pathname.split("/")[2];
        // console.log(path+" useEffect")
        props.getSingle(path);
    }, []);

    return (
        <div className="SingleAnime">
            {/* <h1>SINGLE ANIME </h1> */}
            {id? <img className="cover" src={attributes.coverImage.large}/> : <h2>none</h2> }
            {attributes?
                <div className="info">
                    <div className="image">
                        <img className="card" src={attributes.posterImage.tiny}/>
                    </div>

                    <div className="description">
                        <h1>{attributes.titles.en}&emsp; <span>{attributes.startDate.split("-")[0]}</span></h1>
                        <h4>{attributes.averageRating}% &emsp;Community Approval</h4>
                        <span> {attributes.ageRatingGuide} </span>
                        <p>{attributes.synopsis}</p>
                        <h6></h6>
                    </div>

                    <ul className="details">
                        <li>Status: <span>{attributes.status}</span></li>
                        <li>Show Type: <span>{attributes.showType}</span></li>
                        <li>Episode Count: <span>{attributes.episodeCount}</span></li>
                        <li>Episode Length: <span>{attributes.episodeLength}</span></li>
                        <li>Favorite Count: <span>{attributes.favoritesCount}</span></li>
                        <li>Total Length: <span>{attributes.totalLength}</span></li>
                        <li>User Count: <span>{attributes.userCount}</span></li>
                        <li>Rating Rank: <span>{attributes.ratingRank}</span></li>
                    </ul>
                </div>: <div></div> }
        </div>
    );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return {
    getSingle: (id) => { dispatch( getSingle(id) ); },
}; };
export default connect (mapStateToProps, dispatchToProps)(SingleAnime);

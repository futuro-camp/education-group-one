import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/top-list.scss";

const TopList = (props: any) => {
    let { mainPage } = props;
    let {name, content} = mainPage;
    useEffect( () => {
    }, []);
    // {console.log(mainPage.name)}

    return (
        <div className="TopList">
            <h2>{name}</h2>
            <div className="animeRow">
                <ul className="anime">
                    {
                        mainPage.content? content.map( (elem) => (
                            <li key={elem.id}>
                                <a href="#">
                                    <div className="card">
                                        <picture>
                                                {/* <source media ="(min-width: 1440px)" srcset={elem.posterImage.large} />
                                                <source media="(min-width: 1024px)" srcset={elem.posterImage.medium} />
                                                <source media="(min-width: 320px)" srcset={elem.posterImage.small} /> */}
                                                { elem.posterImage?
                                                    <img src={elem.posterImage.small} />
                                                        : <img src="https://s3.amazonaws.com/www-inside-design/uploads/2017/07/Accurate-and-editable-radial-progress-bars-in-Sketch-feature-284x402.jpg" />
                                                }
                                        </picture>
                                        <button className="addToLibrary">Add To Library</button>
                                        <div className="info">
                                            <div className="title">
                                                <p>{elem.canonicalTitle}</p>
                                                <p>
                                                    <span role="img" aria-label="Love">💗</span>#{elem.popularityRank} Popularity Rank
                                                    {elem.averageRaiting?
                                                        <span>{elem.averageRaiting} %</span> : <span></span>
                                                    }
                                                </p>
                                                <p>
                                                    <span role="img" aria-label="Love">⭐</span>#{elem.ratingRank} Highest Rated
                                                    <span>{elem.startDate}</span>
                                                </p>
                                            </div>
                                            <p>{elem.synopsis}</p>
                                        </div>
                                    </div>
                                </a>

                            </li>
                        )) : <li></li>
                    }
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return { }; };
export default connect (mapStateToProps, dispatchToProps)(TopList);

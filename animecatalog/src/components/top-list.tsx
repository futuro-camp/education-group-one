import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/top-list.scss";

const TopList = (props: any) => {
    let { name, mainPage } = props;
    let { content } = mainPage;
    useEffect( () => {
    }, []);
    // {console.log(mainPage)}

    return (
        <div className="TopList">
            <h2>{name}</h2>
            <div className="animeRow">
                <ul className="anime">
                    {
                        mainPage.content? mainPage.content.map( (elem) => (
                            <li key={elem.id}>
                                <a href="#">
                                    <div className="card">
                                        <picture>
                                                {/* <source media ="(min-width: 1440px)" srcset={elem.posterImage.large} />
                                                <source media="(min-width: 1024px)" srcset={elem.posterImage.medium} />
                                                <source media="(min-width: 320px)" srcset={elem.posterImage.small} /> */}
                                                <img src={elem.posterImage.small} alt="_" />
                                        </picture>
                                        <button className="addToLibrary">Add To Library</button>
                                        <div className="info">
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

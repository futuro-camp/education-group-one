import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/content.scss";
import TopList from "./top-list";
import { getAnime, getTopAnime, getManga, getTopManga  }  from "../actions/index";

const Content = (props:any) => {
    useEffect( () => {
    }, []);

    return (
        <div className="Content">
            <div className="buttons">
                <button onClick={ () => {props.getAnime(props.mainPage);} }>Highest Rated Anime</button>
                <button onClick={ () => {props.getTopAnime(props.mainPage);} }>Anime Released in 2001</button>
                <button onClick={ () => {props.getManga(props.mainPage);} }>Highest Rated Manga</button>
                <button onClick={ () => {props.getTopManga(props.mainPage);} }>Manga Released in 2001</button>
            </div>
            <TopList />
        </div>
    );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return {
    getAnime: (params) => { dispatch( getAnime(params) ); },
    getTopAnime: (params) => { dispatch( getTopAnime(params) ); },
    getManga: (params) => { dispatch( getManga(params) ); },
    getTopManga: (params) => { dispatch( getTopManga(params) ); },

}; };
export default connect (mapStateToProps, dispatchToProps)(Content);

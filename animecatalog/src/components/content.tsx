import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/content.scss";
import TopList from "./top-list";
import { getTopAnime }  from "../actions/index";

const Content = (props:any) => {
    useEffect( () => {
    }, []);

    return (
        <div className="Content">
            <div className="buttons">
                <button onClick={ () => {props.getTopAnime();} }>2001</button>
                <button onClick={ () => {props.getTopAnime();} }>Top</button>
                <button onClick={ () => {props.getTopAnime();} }>Top</button>
            </div>
            <TopList />
        </div>
    );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return {
    getTopAnime: () => { dispatch( getTopAnime() ); },

}; };
export default connect (mapStateToProps, dispatchToProps)(Content);

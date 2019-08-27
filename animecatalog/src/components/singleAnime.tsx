import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/categories.scss";
import { getFiltered }  from "../actions/index";

const SingleAnime = (props:any) => {

    useEffect( () => {
    }, []);
    // console.log(props.mainPage.categories);

    return (
        <div className="SingleAnime">
            <h1>SINGLE ANIME</h1>
        </div>
    );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return {
    // getFiltered: (object) => { dispatch( getFiltered(object) ); },
}; };
export default connect (mapStateToProps, dispatchToProps)(SingleAnime);

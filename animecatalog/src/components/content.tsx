import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/content.scss";
import TopList from "./top-list";

const Content = (props:any) => {

    useEffect( () => {
    }, []);

    return (
        <div className="Content">
            <TopList name="Highest Rated Anime" />
        </div>
    );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return { }; };
export default connect (mapStateToProps, dispatchToProps)(Content);

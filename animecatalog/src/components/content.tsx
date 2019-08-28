import React, {useEffect} from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import mainPage from "../reducers/main-page";
import "../styles/content.scss";
import TopList from "./top-list";
import { getAnime, getTopAnime, getManga, getTopManga, getFiltered }  from "../actions/index";
import { chaptersCatalogManga } from "../saga/saga";
import { history } from "../index";
import { Link } from 'react-router-dom';
import Categories from "./categories";


interface IContent {
    mainPage: any;
    getAnime: (any) => void;
    getTopAnime: (any) => void;
    getManga: (any) => void;
    getTopManga: (any) => void;
    getFiltered: (any) => void;
}
export class Content extends React.Component<IContent> {
    componentDidMount() {
        this.props.getAnime(this.props.mainPage);
    }

    componentDidUpdate() {
        let part = history.location.pathname.split("/")[2];
        if (part) {
            if (part !== this.props.mainPage.choosedCategory) {
                this.props.getFiltered(part);
            }
        }
        else {
            return "" !== this.props.mainPage.choosedCategory ? this.props.getAnime(this.props.mainPage) : null;
        }
    }

    render() {
        return (
            <div className="Content">
                <div className="buttons">
                    <button onClick={ () => {this.props.getAnime(this.props.mainPage);} }>Highest Rated Anime</button>
                    <button onClick={ () => {this.props.getTopAnime(this.props.mainPage);} }>Anime Released in 2001</button>
                    <button onClick={ () => {this.props.getManga(this.props.mainPage);} }>Highest Rated Manga</button>
                    <button onClick={ () => {this.props.getTopManga(this.props.mainPage);} }>Manga with 10 chapters</button>
                </div>
                <TopList />
                <Categories />
            </div>
        );
    }
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return {
    getAnime: (params) => { dispatch( getAnime(params) ); },
    getTopAnime: (params) => { dispatch( getTopAnime(params) ); },
    getManga: (params) => { dispatch( getManga(params) ); },
    getTopManga: (params) => { dispatch( getTopManga(params) ); },
    getFiltered: (object) => { dispatch( getFiltered(object) ); },
}; };
export default connect (mapStateToProps, dispatchToProps)(Content);

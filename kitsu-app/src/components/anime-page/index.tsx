import React, {useEffect} from "react";
import { connect } from "react-redux";
import { history } from "../../constants";
import { getAnimePage } from "../../actions";
import Header from "./header";
import Content from "./content";
import "../../style/anime-page.scss";

const AnimePage = (props: any) => {
    useEffect(() => {
        props.getAnimePage(history.location.search.split("?")[1]);
    }, []);
    return (
        <div className="anime-page">
            <Header />
            <Content />
        </div>
    );
};


export default connect(
    (state: any) => ({
        anime: state.anime
    }),
    (dispatch) => ({
        getAnimePage: (id: string) => { dispatch(getAnimePage(id)); }
    })
)(AnimePage);

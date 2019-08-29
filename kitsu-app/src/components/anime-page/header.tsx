import React from "react";
import { connect } from "react-redux";
import "../../style/header.scss";

const Header = (props: any) => (
    <div className="header">
        <h2 className="title">{props.anime ? props.anime.title : ""}</h2>
        <div>
            <img src={props.anime ? props.anime.coverImage : ""} alt=""/>
        </div>
    </div>
);

export default connect(
    (state: any) => ({
        anime: state.anime[0]
    })
)(Header);

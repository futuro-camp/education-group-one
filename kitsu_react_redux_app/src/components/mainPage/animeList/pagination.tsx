import React from "react";
import "../../../styles/mainPage/animeList/pagination.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function mapStateToProps(state: any) {
    let { paginationLinks } = state.anime;
    return {
        paginationLinks
    };
}

function pagination(props: any) {
    return (
        <ul className="pagination">
            {props.paginationLinks.prev ? <li><Link to={props.paginationLinks.first}>&#60;&#60;</Link></li> : null}
            {props.paginationLinks.prev ? <li><Link to={props.paginationLinks.prev}>&#60;</Link></li> : null}
            {props.paginationLinks.next ? <li><Link to={props.paginationLinks.next}>&#62;</Link></li> : null}
            {props.paginationLinks.next ? <li><Link to={props.paginationLinks.last}>&#62;&#62;</Link></li> : null}
        </ul>
    );
};

export default connect(mapStateToProps)(pagination);

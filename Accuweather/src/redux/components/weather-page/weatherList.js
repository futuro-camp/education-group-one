import React from "react";
import { connect } from "react-redux";
import ListItem from "./weatherListItem";
import "../../../style/list.scss";
import PropTypes from "prop-types";

const List = ({ weather }) => (
    <ul className="nav">
        {weather.map((element) => (
            <ListItem key={element.id} element={element} />
        ))}
    </ul>
);

List.propTypes = {
    weather: PropTypes.array.isRequired
};

export default connect(
    ({ weather }) => ({
        weather
    })
)(List);

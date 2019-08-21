import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getWeather } from "../../actions/index";
import List from "./weatherList";
import Day from "./choosenDay";

const WeatherPage = ({ getWeather }) => {

    useEffect(() => {
        getWeather();
    }, [getWeather])

    return (
        <div>
            <List />
            <Day />
        </div>
    );
}

export default connect(
    null,
    (dispatch) => ({
        getWeather: () => { dispatch(getWeather()); }
    })
)(WeatherPage);

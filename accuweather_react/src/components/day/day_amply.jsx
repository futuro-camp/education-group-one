import React from "react";
import { connect } from "react-redux";
import Icons from "../../static/icons.js";
import PropTypes from "prop-types";
import "../../styles/day/day-amply.scss";

function mapStateToProps(state) {
    return {
        dayData: state.daysData[state.currentChoosed]
    };
}

const day_amply = (props) => {
    let { dayData } = props;
    let { date, day, night, realFeelTemperature, realFeelTemperatureShade, temperature } = dayData;
    return (
        <div className="day-amply">
            <h1 className="date">{new Date(date).toLocaleDateString("en-US", { day: "numeric", month: "long" })}</h1>
            <div className="day-info info">
                <h1 className="icon-description">{day.text}</h1>
                <img src={Icons[day.icon]} alt=""/>
                <h2 className="liquid">Liquid: {day.liquid}</h2>
                <h2 className="wind">Windspeed: {day.wind}</h2>
            </div>
            <div className="night-info info">
                <h1 className="icon-description">{night.text}</h1>
                <img src={Icons[night.icon]} alt=""/>
                <h2 className="liquid">Liquid: {night.liquid}</h2>
                <h2 className="wind">Windspeed: {night.wind}</h2>
            </div>
            <div className="temperatyre-info info">
                <p className="day-temperature">Day Temperature: {temperature.max}<span className="day-temperature-night">{temperature.min}</span></p>
                <p className="day-temperature-real">Feel Like: {realFeelTemperature.max}<span className="day-temperature-night">{realFeelTemperature.min}</span></p>
                <p className="day-temperature-real-shade">In Shade Feel Like: {realFeelTemperatureShade.max}<span className="day-temperature-night">{realFeelTemperatureShade.min}</span></p>
            </div>
        </div>
    );
};

day_amply.propTypes = {
    dayData: PropTypes.object
};

export default connect(mapStateToProps,)(day_amply);
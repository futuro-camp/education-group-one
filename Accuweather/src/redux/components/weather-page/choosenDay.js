import React from "react";
import { connect } from "react-redux";
import "../../../style/day.scss";
import { dataArray } from "../../constants/index";
import PropTypes from 'prop-types';

const Day = ({curDay}) => (curDay ?
    <div className="choosen">
        <div className="top">
            <div className="day">
                <p className="headline">Day</p>
                <p className="text">{curDay.day.text}</p>
                <p className="liquid">Liquid: {curDay.day.liquid}</p>
                <img className="icon" src={dataArray[curDay.day.icon]}/>
                <p className="wind">Wind: {curDay.day.wind}</p>
            </div>
            <div className="night">
                <p className="headline">Night</p>
                <p className="text">{curDay.night.text}</p>
                <p className="liquid">Liquid: {curDay.night.liquid}</p>
                <img className="icon" src={dataArray[curDay.night.icon]}/>
                <p className="wind">Wind: {curDay.night.wind}</p>
            </div>
        </div>
        <div className="bottom">
            <div>
                <p className="headline">Real feel temperature:</p>
                <p className="temperature">{curDay.realFeelTemperature.min}-{curDay.realFeelTemperature.max}</p>
            </div>
            <div>
                <p className="headline">Temperature:</p>
                <p className="temperature">{curDay.temperature.min}-{curDay.temperature.max}</p>

            </div>
            <div>
                <p className="headline">Real feel shade temperature:</p>
                <p className="temperature">{curDay.realFeelTemperatureShade.min}-{curDay.realFeelTemperatureShade.max}</p>

            </div>
        </div>
    </div> : <div className="loading"></div>
);

Day.propTypes = {
    curDay: PropTypes.object.isRequired
}

export default connect(
    ({weather, curNumb}) => ({
        curDay: weather[curNumb]
    })
)(Day);

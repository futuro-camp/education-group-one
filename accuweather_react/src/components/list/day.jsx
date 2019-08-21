import React from "react";
import PropTypes from "prop-types";
import "../../styles/list/day.scss";

export default function day(props) {
    let { date, iconDay, iconNight, temperature, onClick, choosed } = props;
    let { max, min } = temperature;
    return (
        <li className={choosed ? "day choosed" : "day"}>
            <button onClick={onClick}>
                <h1 className="day-date">{date}</h1>
                <div className="icon">
                    <div className="day-icon-day-container">
                        <img src={iconDay} alt="" className="day-icon"/>
                    </div>
                    <div className="day-icon-night-container">
                        <img src={iconNight} alt="" className="day-icon"/>
                    </div>
                </div>
                <p className="day-temperature-day">{max}<span className="day-temperature-night">{min}</span></p>
            </button>
        </li>
    ); 
}

day.propTypes = {
    date : PropTypes.string,
    iconDay: PropTypes.string,
    iconNight: PropTypes.string,
    temperature: PropTypes.number,
    choosed: PropTypes.bool
};

import React  from "react";
import { connect } from "react-redux";
import icons from "../icons";
import PropTypes from 'prop-types';

const Choice = ( { current } ) => {
    return (
        <div>
            { current.day ?
                <div className="view">
                    <h2>Choosen Day</h2>
                    <h3>{ current.date}</h3>
                    <div className="mainDay">
                        <div className="afternoon">
                            <img className="secondary-img" src={icons[ current.day.icon]} alt=""/>
                            <ul className="day-time-values">
                                <li><b>{ current.day.text}</b></li>
                                <li><b>Liquid:</b> { current.day.liquid}</li>
                                <li><b>Wind:</b> { current.day.wind}</li>
                            </ul>
                        </div>
                        <div className="night">
                        <img className="secondary-img" src={icons[ current.night.icon]} alt=""/>
                            <ul className="day-time-values">
                                <li><b>{ current.night.text}</b></li>
                                <li><b>Liquid:</b> { current.night.liquid}</li>
                                <li><b>Wind:</b> { current.night.wind}</li>
                            </ul>
                        </div>
                        <div className="general-info">
                            <ul className="info">
                            <ul className="category">
                                    <li className="heading"><h5>Real Feel Shade Temperature</h5></li>
                                    <li className="value">{ current.realFeelTemperatureShade.min}</li>
                                    <li className="value">{ current.realFeelTemperatureShade.max}</li>
                                </ul>
                                <ul className="category">
                                    <li className="heading"><h5>Real Feel Temperature</h5></li>
                                    <li className="value">{ current.realFeelTemperature.min}</li>
                                    <li className="value">{ current.realFeelTemperature.max}</li>
                                </ul>
                                <ul className="category">
                                    <li className="heading"><h5>Average Temperature</h5></li>
                                    <li className="value">{ current.temperature.min}</li>
                                    <li className="value">{ current.temperature.max}</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                :
                <div className="view"></div>
            }
        </div>
    )
};

Choice.propTypes = {
    current: PropTypes.object
};

const mapStateToProps = ( store ) => { return { current:  store.current }; };
const dispatchToProps = ( dispatch ) => { return  {};  };
export default connect (mapStateToProps, dispatchToProps)(Choice);

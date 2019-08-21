import React  from "react";
import { connect } from "react-redux";
import icons from "../icons";

const Choice = ( { store } ) => {
    return (
        <div>
            {store.current.day ?
                <div className="view">
                    <h2>Choosen Day</h2>
                    <h3>{store.current.date}</h3>
                    <div className="mainDay">
                        <div className="afternoon">
                            <img className="secondary-img" src={icons[store.current.day.icon]} alt=""/>
                            <ul className="day-time-values">
                                <li><b>{store.current.day.text}</b></li>
                                <li><b>Liquid:</b> {store.current.day.liquid}</li>
                                <li><b>Wind:</b> {store.current.day.wind}</li>
                            </ul>
                        </div>
                        <div className="night">
                        <img className="secondary-img" src={icons[store.current.night.icon]} alt=""/>
                            <ul className="day-time-values">
                                <li><b>{store.current.night.text}</b></li>
                                <li><b>Liquid:</b> {store.current.night.liquid}</li>
                                <li><b>Wind:</b> {store.current.night.wind}</li>
                            </ul>
                        </div>
                        <div className="general-info">
                            <ul className="info">
                            <ul className="category">
                                    <li className="heading"><h5>Real Feel Shade Temperature</h5></li>
                                    <li className="value">{store.current.realFeelTemperatureShade.min}</li>
                                    <li className="value">{store.current.realFeelTemperatureShade.max}</li>
                                </ul>
                                <ul className="category">
                                    <li className="heading"><h5>Real Feel Temperature</h5></li>
                                    <li className="value">{store.current.realFeelTemperature.min}</li>
                                    <li className="value">{store.current.realFeelTemperature.max}</li>
                                </ul>
                                <ul className="category">
                                    <li className="heading"><h5>Average Temperature</h5></li>
                                    <li className="value">{store.current.temperature.min}</li>
                                    <li className="value">{store.current.temperature.max}</li>
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

const mapStateToProps = ( store ) => { return { store }; };
const dispatchToProps = ( dispatch ) => { return  {};  };
export default connect (mapStateToProps, dispatchToProps)(Choice);

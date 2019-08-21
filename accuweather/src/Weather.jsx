import React, { useEffect } from 'react';
import './Weather.css';
import { connect } from "react-redux";
// import axios from "axios";
// import data from "./data/five-day-weather.json";
import { getWeather, changeDay } from "./actions/actions";
import icons from "./icons.js";


const Content = ( { getWeather, store, changeDay } ) => {

    useEffect( () => {
        getWeather();
    }, []);
    // console.log(store);

    return (
        <div className="Content">
            <ul className="days">
                { store.forecast.map( (el) =>
                    <li key={el.id}>
                        <button className="day" onClick={ () => changeDay(el.id) } >
                            <li> <p className="date">{el.date}</p> </li>
                            <li><img className="imageIcon" src={icons[el.day.icon]} alt={el.day.icon}/></li>
                            <ul className="dayProperties">
                                <li> <b>Min:</b> {el.temperature.min} </li>
                                <li> <b>Max:</b> {el.temperature.max} </li>
                            </ul>
                        </button>
                    </li>
                ) }
            </ul>
            {/* trying to make something like lazyloading with checking boolean variable */}
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
    );
}

const mapStateToProps = ( store ) => { return { store }; };
const dispatchToProps = ( dispatch ) => { return  {
    getWeather: () => { dispatch( getWeather() ) },
    changeDay: (id) => { dispatch( changeDay(id) ) }
}  };
export default connect (mapStateToProps, dispatchToProps)(Content);

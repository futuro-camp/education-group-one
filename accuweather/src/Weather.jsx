import React, { useEffect } from 'react';
import './Weather.css';
import { connect } from "react-redux";
// import axios from "axios";
// import data from "./data/five-day-weather.json";
import { getWeather, changeDay, getDay } from "./actions/actions";


const Content = ( { getWeather, store } ) => {

    useEffect( () => {
        // request to get actual weather
        // axios.get ( "http://dataservice.accuweather.com/forecasts/v1/daily/5day/323903?apikey=Wb4iGdUapbWfL5nQSxLEgmtdoNLQy751&details=true&metric=true" )
        // .then( (res) => {
        //     console.log("res");
        //     let data = JSON.stringify(res.data);
        //     console.log(res.data);
        //     console.log(data);
        // } )
        // .catch ( (err) => {
        //     console.log(err);
        // } )
        // console.log(data);
        getWeather();
    }, []);
    // console.log(store.forecast);


    return (
        <div className="Content">
            <ul className="days">
                { store.forecast.map( (el) =>
                    <li>
                        <button key={el.id} className="day" onClick={ () => getDay(el.id) } >
                            <img className="imageIcon" src="./icons/16-s.png" alt={el.id}/>
                            <ul className="dayProperties">
                                <li> <p className="date">{el.date}</p> </li>
                                <li> Min: {el.temperature.min} </li>
                                <li> Max: {el.temperature.max} </li>
                            </ul>
                        </button>
                    </li>
                ) }
            </ul>
            <div className="view">
                <h2>Choosen Day</h2>
            </div>
        </div>
    );
}

const mapStateToProps = ( store ) => { return { store }; };
const dispatchToProps = ( dispatch ) => { return ( {
    getWeather: () => { dispatch( getWeather() ) },
    getDay: (id) => { dispatch( getDay(id) ) }
} ); };
export default connect (mapStateToProps, dispatchToProps)(Content);

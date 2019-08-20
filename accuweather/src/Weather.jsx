import React, { useEffect } from 'react';
import './Weather.css';
import { connect } from "react-redux";
// import axios from "axios";
// import data from "./data/five-day-weather.json";
import { getWeather, changeDay } from "./actions/actions";
import icons from "./icons.js";


const Content = ( { getWeather, store, changeDay } ) => {

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
    console.log(store);

    return (
        <div className="Content">
            <ul className="days">
                { store.forecast.map( (el) =>
                    <li>
                        <button key={el.id} className="day" onClick={ () => changeDay(el.id) } >
                            <li> <p className="date">{el.date}</p> </li>
                            <img className="imageIcon" src={icons[el.day.icon]} alt={el.day.icon}/>
                            <ul className="dayProperties">
                                <li> Min: {el.temperature.min} </li>
                                <li> Max: {el.temperature.max} </li>
                            </ul>
                        </button>
                    </li>
                ) }
            </ul>
            <div className="view">
                <h2>Choosen Day</h2>
                <div className="mainDay">
                    {store.current.date}
                    <div className="afternoon">
                        <img src="" alt=""/>
                        {/* {store.current.day.icon} */}
                        {/* {console.log(store.current)} */}
                    </div>
                    <div className="night">
                        <img src="" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ( store ) => { return { store }; };
const dispatchToProps = ( dispatch ) => { return  {
    getWeather: () => { dispatch( getWeather() ) },
    changeDay: (id) => { dispatch( changeDay(id) ) }
}  };
export default connect (mapStateToProps, dispatchToProps)(Content);

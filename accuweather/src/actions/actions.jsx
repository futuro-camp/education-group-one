// import axios from "axios";
import data from "../data/five-day-weather.json";

export const CHANGE_DAY = "CHANGE_DAY";
export function changeDay(payload) {
    console.log("action");
    console.log(payload);
    return { type: CHANGE_DAY, payload };
}

export const RESPONSE_TO_STORE = "RESPONSE_TO_STORE";
export function responseToStore(payload) {
    return { type: RESPONSE_TO_STORE, payload };
}

const dataFormat = (data) => {
    return data.DailyForecasts.map( (element) => ({
        date: element.Date,
        id: data.DailyForecasts.indexOf(element),
        day: {
            icon: element.Day.Icon,
            text: element.Day.IconPhrase,
            liquid: `${element.Day.TotalLiquid.Value}${element.Day.TotalLiquid.Unit}`,
            wind: `${element.Day.Wind.Speed.Value}${element.Day.Wind.Speed.Unit}`
        },
        night: {
            icon: element.Night.Icon,
            text: element.Night.IconPhrase,
            liquid: `${element.Night.TotalLiquid.Value}${element.Night.TotalLiquid.Unit}`,
            wind: `${element.Night.Wind.Speed.Value}${element.Night.Wind.Speed.Unit}`
        },
        realFeelTemperature: {
            max: `${element.RealFeelTemperature.Maximum.Value}${element.RealFeelTemperature.Maximum.Unit}`,
            min: `${element.RealFeelTemperature.Minimum.Value}${element.RealFeelTemperature.Minimum.Unit}`
        },
        realFeelTemperatureShade: {
            max: `${element.RealFeelTemperatureShade.Maximum.Value}${element.RealFeelTemperatureShade.Maximum.Unit}`,
            min: `${element.RealFeelTemperatureShade.Minimum.Value}${element.RealFeelTemperatureShade.Minimum.Unit}`
        },
        temperature: {
            max: `${element.Temperature.Maximum.Value}${element.Temperature.Maximum.Unit}`,
            min: `${element.Temperature.Minimum.Value}${element.Temperature.Minimum.Unit}`
        }
    }))
}

export function getDay () {
    return function (dispatch) {
        dispatch ( changeDay() );
    }
}

export function getWeather () {
    return function (dispatch) {
        dispatch( responseToStore ( dataFormat(data) ) );

        // request to get actual weather
        // axios.get ( "http://dataservice.accuweather.com/forecasts/v1/daily/5day/323903?apikey=Wb4iGdUapbWfL5nQSxLEgmtdoNLQy751&details=true&metric=true" )
        // .then( (res) => {
        //     console.log(res);
        //     dispatch( responseToStore(res.data) )
        // } )
        // .catch ( (err) => {
        //     console.log(err);
        // } )
    }
}

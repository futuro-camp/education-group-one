import axios from "axios";

export const DAY_SELECT = "DAY_SELECT";
export const SET_WEATHER = "GET_WEATHER";

export const daySelect = (payload) => ({
    type: DAY_SELECT,
    payload
});

const setWeather = (payload) => ({
    type: SET_WEATHER,
    payload
});

const dataFormat = (data) => {
    return data.map((element) => ({
        date: new Date(element.Date).toLocaleDateString("en-US", { day: "numeric", month: "long" }),
        id: data.indexOf(element),
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
    }));
};

export const getWeather = () => {
    return (dispatch) => {
        axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/323903?apikey=Wb4iGdUapbWfL5nQSxLEgmtdoNLQy751&details=true&metric=true")
        .then((response) => {
             dispatch(setWeather(dataFormat(response.data.DailyForecasts)));
        });
    }
}

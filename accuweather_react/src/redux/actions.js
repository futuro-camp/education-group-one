import axios from "axios";

const actions = {
    FIVE_DAYS_GET: 1,
    FIVE_DAYS_SUCCESS: 2,
    FIVE_DAYS_REJECT: 3,
    CURRENT_DAY_CHANGE: 4
}

const fiveDaysSuccess = (data) => ({
    type: actions.FIVE_DAYS_SUCCESS,
    payload: data
})

const fiveDaysReject = (answer) => ({
    type: actions.FIVE_DAYS_REJECT,
    payload: answer
})

export const currentDayChoosed = (index) => ({
    type: actions.CURRENT_DAY_CHANGE,
    payload: index
})

const dataFormat = (data) => {
    return data.map((element) => ({
        date: element.Date,
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
            max: `${element.RealFeelTemperature.Maximum.Value}°${element.RealFeelTemperature.Maximum.Unit}`,
            min: `${element.RealFeelTemperature.Minimum.Value}°${element.RealFeelTemperature.Minimum.Unit}`
        },
        realFeelTemperatureShade: {
            max: `${element.RealFeelTemperatureShade.Maximum.Value}°${element.RealFeelTemperatureShade.Maximum.Unit}`,
            min: `${element.RealFeelTemperatureShade.Minimum.Value}°${element.RealFeelTemperatureShade.Minimum.Unit}`
        },
        temperature: {
            max: `${element.Temperature.Maximum.Value}°${element.Temperature.Maximum.Unit}`,
            min: `${element.Temperature.Minimum.Value}°${element.Temperature.Minimum.Unit}`
        }
    }))
}

export const fiveDaysGet = () => (dispatch) => {
    dispatch({
        type: actions.FIVE_DAYS_GET
    })

    axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/323903?apikey=Wb4iGdUapbWfL5nQSxLEgmtdoNLQy751&details=true&metric=true")
    .then((answer)=>{
        dispatch(fiveDaysSuccess(dataFormat(answer.data.DailyForecasts)));
    })
    .catch((answer)=>{
        dispatch(fiveDaysReject(answer));
    });
}

export default actions;

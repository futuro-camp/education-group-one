import {
    DAY_SELECT,
    SET_WEATHER
} from "../actions";

const InitialState = {
    weather: [],
    curNumb: 0
};

export default (state = InitialState, action) => {
    switch(action.type) {
        case DAY_SELECT:
            console.log("day selected ", action.payload);
            break;
        case SET_WEATHER:
            console.log("set weather"); 
            return {
                ...state,
                weather: action.payload
            }
    }
    return state;
};

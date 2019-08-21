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
            return {
                ...state,
                curNumb: action.payload
            }
        case SET_WEATHER:
            return {
                ...state,
                weather: action.payload
            }
        default: 
            return state;
    }
};

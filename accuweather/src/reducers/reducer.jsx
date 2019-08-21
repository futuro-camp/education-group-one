
import { CHANGE_DAY, RESPONSE_TO_STORE } from "../actions/actions";

const initState = {
    forecast: [],
    current: {}
}

const Reducer = ( state = initState, action ) => {
    switch (action.type) {

        case CHANGE_DAY:
            let main = state.forecast[action.payload];
            return {...state, current: main };

        case RESPONSE_TO_STORE:
            return { ...state, forecast: action.payload };

        default:
            return state;
    }
};

export default Reducer;

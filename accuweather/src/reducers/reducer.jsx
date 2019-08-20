
import { CHANGE_DAY, RESPONSE_TO_STORE } from "../actions/actions";

const initState = {
    forecast: [],
    current : []
}

const Reducer = ( state = initState, action ) => {
    switch (action.type) {

        case CHANGE_DAY:
            console.log(action.payload);
            let main = state.forecast[action.payload];
            return {...state, current: main };

        case RESPONSE_TO_STORE:
            return {...state, forecast: action.payload, current: action.payload[0] };

        default:
            return state;
    }
}

export default Reducer;

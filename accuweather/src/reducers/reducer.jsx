
import { CHANGE_DAY, RESPONSE_TO_STORE } from "../actions/actions";

const initState = {
    forecast: [],
    current : 0
}

const Reducer = ( state = initState, action ) => {
    switch (action.type) {

        case RESPONSE_TO_STORE:
            return {...state, forecast: action.payload }

        case CHANGE_DAY:
            console.log("button");
            console.log(action.payload);
            return {...state, current: action.payload };

        default:
            return state;
    }
}

export default Reducer;

import { browserHistory } from "../App";
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    EMAIL_INPUT,
    PASSWORD_INPUT,
    EXIT_FROM_ACCOUNT
} from "../actions/loginActions";
const initState = {
    email: "user",
    password: "pass",
    auth:"not keygen from server"
}
const userReducer = (state = initState, action) => {
    switch (action.type){

        case LOGIN_SUCCESS:
            console.log("login done");
            console.log(action.payload);
            console.log("writing key to state.auth");
            console.log("pushing URL to the next");
            browserHistory.push("/api/providers");
            return { ...state, auth: action.payload };

        case LOGIN_FAILURE:
            console.log("login false:" + action.payload);

        case EMAIL_INPUT:
            return {...state, email: action.payload};

        case PASSWORD_INPUT:
            return {...state, password: action.payload};

        case EXIT_FROM_ACCOUNT:
            browserHistory.push("/");
            return {...state, auth: "deleted key"};

        default:
            return state;
    }
}

export default userReducer;

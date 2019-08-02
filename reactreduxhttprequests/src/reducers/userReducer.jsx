
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
    auth:"not key from the server"
};
const userReducer = (state = initState, action) => {
    switch (action.type){

        case LOGIN_SUCCESS:
            return { ...state, auth: action.payload };

        case LOGIN_FAILURE:
            console.log("login false:" + action.payload);
            return state;

        case EMAIL_INPUT:
            return {...state, email: action.payload};

        case PASSWORD_INPUT:
            return {...state, password: action.payload};

        case EXIT_FROM_ACCOUNT:
            return {...state, auth: "deleted key"};

        default:
            return state;
    }
};

export default userReducer;

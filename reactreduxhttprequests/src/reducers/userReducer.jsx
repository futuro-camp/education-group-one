import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    EMAIL_INPUT,
    PASSWORD_INPUT
} from "../actions/loginActions";
const initState = {
    email: "user",
    password: "pass",
    auth:"keygen from server"
}
const userReducer = (state = initState, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            console.log("login done");
            console.log(action.payload);
            console.log("writing key to state.auth");
            return { ...state, auth: action.payload };
        case LOGIN_FAILURE:
            console.log("login false:" + action.payload);
        case EMAIL_INPUT:
            return {...state, email: action.payload};
        case PASSWORD_INPUT:
            return {...state, password: action.payload};
        default:
            return state;
    }
}

export default userReducer;

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    EMAIL_INPUT_CHANGE,
    PASSWORD_INPUT_CHANGE,
    LOG_OUT,
    LOGIN_ERROR_CLEAR
} from "../actions";

const InitialState = {
    login: "",
    password: "",
    key: "",
    error: "",
    fetch: false,
};

export default (state = InitialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return ({
                ...state,
                login: "",
                password: "",
                error: "",
                fetch: true
            });
        case LOGIN_SUCCESS:
            return ({
                ...state,
                key: action.payload,
                fetch: false,
            });
        case LOGIN_FAILURE:
            return ({
                ...state,
                error: action.payload,
                fetch: false
            });
        case EMAIL_INPUT_CHANGE:
            return ({
                ...state,
                login: action.payload
            });
        case PASSWORD_INPUT_CHANGE:
            return ({
                ...state,
                password: action.payload
            });
        case LOG_OUT:
            return ({
                ...state,
                key: ""
            });
        case LOGIN_ERROR_CLEAR:
            return ({
                ...state,
                error: ""
            });
        default:
            return state;
    }
};

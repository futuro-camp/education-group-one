import axios from "axios";
import {server_ip, history} from "../constants";
import { clearCategories } from "./categories";
import { clearItems } from "./items";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const EMAIL_INPUT_CHANGE = "EMAIL_INPUT_CHANGE";
export const PASSWORD_INPUT_CHANGE = "PASSWORD_INPUT_CHANGE";
export const LOG_OUT = "LOG_OUT";
export const LOGIN_ERROR_CLEAR = "LOGIN_ERROR_CLEAR";

const loginRequest = () => ({
    type: LOGIN_REQUEST
});

const loginSuccess = (key) => ({
    type: LOGIN_SUCCESS,
    payload: key
});

const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});

export const emailInputChanged = (value) => ({
    type: EMAIL_INPUT_CHANGE,
    payload: value
});

export const passwordInputChanged = (value) => ({
    type: PASSWORD_INPUT_CHANGE,
    payload: value
});

export const logOut = () => (dispatch) => {
    dispatch({type: LOG_OUT});
    dispatch(clearCategories());
    dispatch(clearItems());
    history.push("/login");
};

export const loginErrorClear = () => ({
    type: LOGIN_ERROR_CLEAR
});

export default (login, password) => (dispatch) => {
        dispatch(loginRequest());
        axios.post(`${server_ip}/login`, {
            login,
            password
        }).then((response) => {
            dispatch(loginSuccess(response.data.key));
        }).then(() => {
            history.push("/items");
        }).catch((error) => {
            dispatch(loginFailure(error));
        });
};

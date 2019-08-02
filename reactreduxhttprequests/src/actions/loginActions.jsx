import axios from "axios";
import { browserHistory } from "../App";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const EMAIL_INPUT = "EMAIL_INPUT";
export const PASSWORD_INPUT = "PASSWORD_INPUT";
export const EXIT_FROM_ACCOUNT = "EXIT_FROM_ACCOUNT";

export function loginSuccess(payload) {
    browserHistory.push("/api/providers");
    return { type: LOGIN_SUCCESS, payload };
}
export function loginFailure(payload) {
    return { type: LOGIN_FAILURE, payload };
}
export function emailInput(payload) {
    return { type: EMAIL_INPUT, payload };
}
export function passwordInput(payload) {
    return { type: PASSWORD_INPUT, payload };
}
export function exit() {
    browserHistory.push("/");
    return{type: EXIT_FROM_ACCOUNT};
}
export function login(email, password) {
    return function(dispatch) {
        axios.post("http://192.168.1.100:4000/login",
        { login: email, password })
        .then((answer) => {
            dispatch(loginSuccess(answer.data.key));})
        .catch((error) => {
            dispatch(loginFailure(error));
        });
    };
}

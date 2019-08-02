import axios from "axios";
// export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const EMAIL_INPUT = "EMAIL_INPUT";
export const PASSWORD_INPUT = "PASSWORD_INPUT";

export function loginSuccess(payload) {
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

export function login(email, password) {
    return function(dispatch) {
        console.log(email, password);
        console.log("request to server");
        axios.post("http://192.168.1.100:4000/login", { login: email, password: password })
        .then((answer) => {
            dispatch(loginSuccess(answer.data.key))})
        .catch((error) => {
            dispatch(loginFailure(error))
        })
    }
}

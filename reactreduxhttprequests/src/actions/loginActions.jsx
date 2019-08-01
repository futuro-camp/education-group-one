import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const EMAIL_INPUT = "EMAIL_INPUT";
export const PASSWORD_INPUT = "PASSWORD_INPUT";

export function login() {
    return function(dispatch) {
            console.log("asdasdasd");
            axios.post("http://192.168.1.100:3000/login", {
            login: "test",
            password: "admin"}).then((res) => {
                console.log(res.data.key);
                dispatch(loginSuccess(res.data.key))
            })
    }
}

export function loginSuccess(payload) {
    return { type: LOGIN_SUCCESS, payload };
}
export function loginFailure(payload) {
    return { type: LOGIN_FAILURE, payload };
}
export function email(payload) {
    return { type: EMAIL_INPUT, payload };
}
export function password(payload) {
    return { type: PASSWORD_INPUT, payload };
}

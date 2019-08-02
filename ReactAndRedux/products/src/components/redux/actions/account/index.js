import actions from "../";
import axios from "axios";

export const inputUpdate = (event) => ({
    type: event.target.name,
    payload: event.target.value
})

const loginSuccess = (answer) => {
    return {
        type: actions.LOGIN_SUCCESS,
        payload: answer
    }
}

const loginReject = (error) => ({
    type: actions.LOGIN_REJECT,
    payload : error
})

export default () => (dispatch, getState) => {
    dispatch({
        type: actions.LOGIN_REQUEST
    });

    const { login, password } = getState().accountReducer;

    axios.post("http://192.168.1.100:4000/login", { login, password })
        .then((answer) => {
            dispatch(loginSuccess(answer.data.key));
        })
        .catch((error) => {
            dispatch(loginReject(error));
        })
}
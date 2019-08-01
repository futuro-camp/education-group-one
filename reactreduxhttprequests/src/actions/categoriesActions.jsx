import axios from "axios";

export const DROPDOWN_LIST = "DROPDOWN_LIST";
export const LIST_SUCCESS = "LIST_SUCCESS";
export const LIST_FAILURE = "LIST_FAILURE";

//Parameters of action's "work"
export function dropdownList (payload) {
    return function (dispatch) {
        axios.get(
            "http://192.168.1.100:3000/api/providers",
            {header: {auth:localStorage.getItem("MyKey") } }
        )
        .then(dispatch(listSuccess()))
        .catch(dispatch(listFailure()))
    }
}
export function listSuccess(payload) {
    return { type: LIST_SUCCESS, payload };
}
export function listFailure(payload) {
    return { type: LIST_FAILURE, payload };
}

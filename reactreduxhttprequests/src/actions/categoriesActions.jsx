import axios from "axios";

export const DROPDOWN_LIST = "DROPDOWN_LIST";
export const LIST_SUCCESS = "LIST_SUCCESS";
export const LIST_FAILURE = "LIST_FAILURE";
export const ITEMS_SUCCESS = "ITEMS_SUCCESS";

export function listSuccess(payload) {
    return { type: LIST_SUCCESS, payload };
}
export function listFailure(payload) {
    return { type: LIST_FAILURE, payload };
}
export function itemsSuccess(payload) {
    return { type: ITEMS_SUCCESS, payload };
}

//Parameters of action's "work"
export function dropdownList () {
    return function (dispatch) {
        axios.get(
            "http://192.168.1.100:4000/api/providers",
            {header: {auth:localStorage.getItem("MyKey") } }
        )
        .then( (answer) => {
            dispatch(listSuccess(answer.data));
        })
        .catch(dispatch(listFailure()));
    };
}

export function getItems(value) {
    return function(dispatch) {
        axios.get(`http://192.168.1.100:4000/api/providers/${value.value}/items`)
        .then( (response) => {
            dispatch(itemsSuccess(response.data));
        })
        .catch( (err) => {
            return err;
        });
    };
}

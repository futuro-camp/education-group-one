import axios from "axios";

export const CATALOG_LIST = "CATALOG_LIST";
export const CATALOG_SUCCESS = "CATALOG_SUCCESS";
export const CATALOG_FAILURE = "CATALOG_FAILURE";

export function catalogSuccess(payload) {
    return { type: CATALOG_SUCCESS, payload };
}
export function catalogFailure(payload) {
    return { type: CATALOG_FAILURE, payload };
}
//Parameters of action's "work"
export function catalogList (payload) {
    return function (dispatch) {
        axios.get(
            "http://192.168.1.100:3000/api/providers/${val.value}/items",
            {header: {auth:localStorage.getItem("MyKey") } }
        )
        .then(dispatch(catalogSuccess()))
        .catch(dispatch(catalogFailure()))
    };
}

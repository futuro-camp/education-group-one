import axios from "axios";

export const CHOOSEN_PRODUCT = "CHOOSEN_PRODUCT";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_FAILURE = "PRODUCT_FAILURE";

//Parameters of action's "work"
export function choosenProduct (payload) {
    return function (dispatch) {
        axios.get(
            "http://192.168.1.100:3000/api/providers/${val.value}/items",
            {header: {auth:localStorage.getItem("MyKey") } }
        )
        .then(dispatch(productSuccess()))
        .catch(dispatch(productFailure()))
    }
}
export function productSuccess(payload) {
    return { type: PRODUCT_SUCCESS, payload };
}
export function productFailure(payload) {
    return { type: PRODUCT_FAILURE, payload };
}

import axios from "axios";

export const CHOOSEN_PRODUCT = "CHOOSEN_PRODUCT";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_FAILURE = "PRODUCT_FAILURE";

export function productSuccess(payload) {
    return { type: PRODUCT_SUCCESS, payload };
}
export function productFailure(payload) {
    return { type: PRODUCT_FAILURE, payload };
}

//Parameters of action's "work"
export function choosenProduct (payload) {
    return (dispatch) => {
        axios.get(
            `http://192.168.1.100:4000/api/providers/${payload}/items`
            // {header: {auth:localStorage.getItem("MyKey") } }
        )
        .then( (res) => {
            dispatch( productSuccess(res.data[0]) );
        })
        .catch( (err) => {
            dispatch(productFailure(err));
        });
    };
}

import axios from "axios";
import { serverIp } from "../constants";
import getRequest from "./get";
import failRequest from "./fail";

export const GET_ITEM_SUCCESS = "GET_ITEM_SUCCESS";
export const GET_ITEM_FAILURE = "GET_ITEM_FAILURE";

const getItemSuccess = (item) => ({
    type: GET_ITEM_SUCCESS,
    payload: item
});

export default (id, key) => {
    return (dispatch) => {
        dispatch(getRequest());
        axios.get(`${serverIp}/api/items/${id}`, {
            head: key
        }).then((response) => {
            dispatch(getItemSuccess(response.data));
        }).catch((error) => {
            dispatch(failRequest(error));
        });
    };
}; 

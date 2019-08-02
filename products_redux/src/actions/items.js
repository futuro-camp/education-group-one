import axios from "axios";
import { serverIp } from "../constants";
import getRequest from "./get";
import failRequest from "./fail";

export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const CLEAR_ITEMS = "CLEAR_ITEMS";

const getItemsSuccess = (items) => ({
    type: GET_ITEMS_SUCCESS,
    payload: items
});

export const clearItems = () => ({
    type: CLEAR_ITEMS,
});

export default (id, key) => {
    return (dispatch) => {
        dispatch(getRequest());
        axios.get(`${serverIp}/api/providers/${id}/items`, {
            head: key
        }).then((response) => {
            dispatch(getItemsSuccess(response.data));
        }).catch((error) => {
            dispatch(failRequest(error));
        });
    };
}; 

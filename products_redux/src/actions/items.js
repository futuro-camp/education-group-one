import axios from "axios";
import { server_ip } from "../constants";
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
        axios.get(`${server_ip}/api/providers/${id}/items`, {
            head: key
        }).then((response) => {
            dispatch(getItemsSuccess(response.data));
        }).catch((error) => {
            dispatch(failRequest(error));
        });
    }
}; 

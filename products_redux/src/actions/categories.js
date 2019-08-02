import axios from "axios";
import { serverIp } from "../constants";
import getRequest from "./get";
import failRequest from "./fail";

export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const CLEAR_CATEGORIES = "CLEAR_CATEGORIES";

const getCategoriesSuccess = (categories) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: categories
});

export const clearCategories = () => ({
    type: CLEAR_CATEGORIES
});

export default (key) => {
    return (dispatch) => {
        dispatch(getRequest());
        axios.get(`${serverIp}/api/providers`, {
            head: key
        }).then((response) => {
            dispatch(getCategoriesSuccess(response.data));
        }).catch((error) => {
            dispatch(failRequest(error));
        });
    };
};

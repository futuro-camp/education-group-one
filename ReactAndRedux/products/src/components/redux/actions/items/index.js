import actions from "../";
import axios from "axios";

const itemListSuccess = (answer) => ({
    type: actions.ITEM_LIST_SUCCESS,
    payload: answer.data
})

const itemListReject = (error) => ({
    type: actions.ITEM_LIST_REJECT,
    payload: error
})

const itemSuccess = (answer) => ({
    type: actions.ITEM_SUCCESS,
    payload: answer.data
})

const itemReject = (error) => ({
    type: actions.ITEM_REJECT,
    payload: error
})

export const itemListRequest = (listId) => (dispatch, getState) => {
    dispatch({
        type: actions.ITEM_LIST_REQUEST
    })

    const { key } = getState();

    axios.get(`http://192.168.1.100:4000/api/providers/${listId}/items`, { headers: { auth: key } })
        .then((answer) => {
            dispatch(itemListSuccess(answer));
        })
        .catch((error) => {
            dispatch(itemListReject(error));
        })
}

export const itemRequest = (itemId) => (dispatch, getState) => {
    dispatch({
        type: actions.ITEM_REQUEST
    })

    const { key } = getState();

    axios.get(`http://192.168.1.100:4000/api/items/${itemId}`, { headers: { auth: key } })
        .then((answer) => {
            dispatch(itemSuccess(answer));
        })
        .catch((error) => {
            dispatch(itemReject(error));
        })
}
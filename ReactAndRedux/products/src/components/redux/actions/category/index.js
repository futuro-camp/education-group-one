import actions from "../";
import axios from "axios";

const categorySuccess = (answer) => ({
    type: actions.CATEGORY_LIST_SUCCESS,
    payload: answer.data.map((element) => ({ value: element.id, label: element.name }))
})

const categoryReject = (error) => ({
    type: actions.CATEGORY_LIST_REJECT,
    payload: error
})

export default () => (dispatch, getState) => {
    dispatch({
        type: actions.CATEGORY_LIST_REQUEST
    })

    const { key } = getState();

    axios.get("http://192.168.1.100:4000/api/providers", { headers: { auth: key } })
        .then((answer) => {
            dispatch(categorySuccess(answer));
        })
        .catch((error) => {
            dispatch(categoryReject(error));
        })
}
export const ADD_TO_LIST = "ADD_TO_LIST";
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_OLD_PRICE = "CHANGE_OLD_PRICE";
export const CHANGE_CURRENT_PRICE = "CHANGE_CURRENT_PRICE";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

export const addToList = () => ({
    type: ADD_TO_LIST
});

export const changeInput = (e) => ({
    type: e.target.name,
    payload: e.target.value
});

export const removeFromList = (id) => ({
    type: REMOVE_FROM_LIST,
    payload: id
});

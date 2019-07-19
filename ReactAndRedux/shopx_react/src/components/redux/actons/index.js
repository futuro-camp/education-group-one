export const actionType = { ADD_TO_LIST: "1", REMOVE_FROM_LIST: "2", NAME_CHANGE: "3", CURRENT_PRICE_CHANGE: "4", OLD_PRICE_CHANGE: "5" };

export const addToList = () => ({
    type: actionType.ADD_TO_LIST
});

export const changeInputValue = (event) => ({
    type: event.target.name,
    payload: event.target.value
});

export const removeFromList = (cardId) => ({
    type: actionType.REMOVE_FROM_LIST,
    payload: cardId
});
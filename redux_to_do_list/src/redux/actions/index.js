export const CHANGE_TITLE = "CHANGE_TITLE";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const ADD_TASK = "ADD_TASK";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const REMOVE_TASK = "REMOVE_TASK";
export const CHANGE_TASK_TITLE = "CHANGE_TASK_TITLE";

export const changeInput = (e) => ({
    type: e.target.name,
    payload: e.target.value
});

export const changeByIndex = (e, id) => ({
    type: e.target.name,
    payload: id
});

export const addTask = () => ({
    type: ADD_TASK
});

export const changeTaskTitle = (e, id) => ({
    type: CHANGE_TASK_TITLE,
    payload: {id, value: e.target.value}
});

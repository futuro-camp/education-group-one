export const actionType = { CHANGE_TITLE: "1", ADD_TASK: "2", CHECK: "3", REMOVE_TASK: "4", CHANGE_INPUT_VALUE: "5", CHANGE_TASK: "6" };

export const readInput = (event) => ({
    type: event.target.name,
    payload: event.target.value
});

export const actionById = (event, id) => {
    return ({
    type: event.target.name,
    payload: id
})};

export const addTask = () => ({
    type: actionType.ADD_TASK,
});

export const changeTaskTitle = (event, id) => ({
    type: actionType.CHANGE_TASK,
    payload: { id, value: event.target.value }
});

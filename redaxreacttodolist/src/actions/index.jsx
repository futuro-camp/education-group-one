export const CHANGE_TITLE = "CHANGE_TITLE";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const ADD_TASK = "ADD_TASK";
export const CHECK_BOX = "CHECK_BOX";
export const REMOVE_TASK = "REMOVE_TASK";

//Parameters of action's "work"
export function changeListTitle(payload) {
    return { type: "CHANGE_TITLE", payload};
}
export function changeInputValue(payload) {
    return { type: "CHANGE_INPUT_VALUE", payload };
}
export function addNewTask() {
    return { type: "ADD_TASK" };
}
export function checkStatus(payload) {
    return { type: "CHECK_BOX", payload };
}
export function removeTask(payload) {
    return { type: "REMOVE_TASK", payload };
}

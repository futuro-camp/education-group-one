export const CHANGE_TITLE = "CHANGE_TITLE";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const ADD_TASK = "ADD_TASK";
export const CHECK_BOX = "CHECK_BOX";

//Parameters of action's "work"
export function addItem() {
    return { type: CHANGE_TITLE};
}
export function removeItem(payload) {
    return { type: "CHANGE_INPUT_VALUE", payload };
}
export function changeName(payload) {
    return { type: "ADD_TASK", payload };
}
export function changePrice(payload) {
    return { type: "CHECK_BOX", payload };
}

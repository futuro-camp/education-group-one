export const signIn = "POST_LOGIN_PASSWORD";
export const getCategories = "GET_CATEGORIES_ LIST";
export const getItems = "GET_ITEMS_ LIST";
export const viewItem = "VIEW_PICKED_ITEM";

//Parameters of action's "work"
export function changeListTitle(payload) {
    return { type: signIn, payload};
}
export function changeInputValue(payload) {
    return { type: getCategories, payload };
}
export function addNewTask() {
    return { type: getItems };
}
export function checkStatus(payload) {
    return { type: viewItem, payload };
}
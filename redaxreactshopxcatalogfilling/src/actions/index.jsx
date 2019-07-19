import {ADD_ITEM} from "../constants/action-types";
//Parameters of action's "work"
export function addItem() {
    return { type: ADD_ITEM};
};
export function removeItem(payload) {
    return { type: "REMOVE_ITEM", payload };
};
export function changeName(payload) {
    return { type: "CHANGE_NAME", payload };
};
export function changePrice(payload) {
    return { type: "CHANGE_PRICE", payload };
};
export function changeDiscount(payload) {
    return { type: "CHANGE_DISCOUNT", payload };
}

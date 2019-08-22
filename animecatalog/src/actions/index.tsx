
export const GET_DATA = "GET_DATA";
export function getData(payload) {
    return { type: GET_DATA };
}
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export function getDataSuccess(payload) {
    return { type: GET_DATA_SUCCESS, payload };
}

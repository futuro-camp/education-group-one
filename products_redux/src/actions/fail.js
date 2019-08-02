export const FAIL_REQUEST = "FAIL_REQUEST";
export const PAGE_ERROR_CLEAR = "PAGE_ERROR_CLEAR";

export const pageErrorClear = () => ({
    type: PAGE_ERROR_CLEAR
})

export default (error) => ({
    type: FAIL_REQUEST,
    payload: error
});

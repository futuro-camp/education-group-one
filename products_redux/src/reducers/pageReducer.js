import { 
    GET_REQUEST,
    FAIL_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_ITEMS_SUCCESS,
    GET_ITEM_SUCCESS,
    CLEAR_CATEGORIES,
    CLEAR_ITEMS,
    PAGE_ERROR_CLEAR } from "../actions";

const InitialState = {
    categories: [],
    items: [],
    item: {
        name: "",
        description: ""
    },
    error: "",
    fetch: false
};

export default (state = InitialState, action) => {
    switch(action.type) {
        case GET_REQUEST:
            return ({
                ...state,
                fetch: true,
                error: ""
            });
        case GET_CATEGORIES_SUCCESS:
            return ({
                ...state,
                categories: action.payload,
                fetch: false,
            });
        case FAIL_REQUEST:
            return ({
                ...state,
                fetch: false,
                error: action.payload + ""
            });
        case GET_ITEMS_SUCCESS:
            return ({
                ...state,
                fetch: false,
                items: action.payload
            });
        case GET_ITEM_SUCCESS:
            return ({
                ...state,
                fetch: false,
                item: action.payload
            });
        case CLEAR_CATEGORIES:
            return ({
                ...state,
                categories: []
            });
        case CLEAR_ITEMS:
            return ({
                ...state,
                items: []
            });
        case PAGE_ERROR_CLEAR:
            return ({
                ...state,
                error: ""
            });
        default:
            return state;
    }
};

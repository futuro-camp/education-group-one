import { DROPDOWN_LIST, LIST_SUCCESS, LIST_FAILURE, ITEMS_SUCCESS } from "../actions/categoriesActions";

const initState = {
    categories: [],
    items: []
}

const categoryReducer = (state = initState, action) => {
    switch (action.type){

        case LIST_SUCCESS:
            return { ...state, categories: action.payload };

        case LIST_FAILURE:
            return state;

        case ITEMS_SUCCESS:
            return { ...state, items: action.payload };
        default:
            return state;
    }
}

export default categoryReducer;

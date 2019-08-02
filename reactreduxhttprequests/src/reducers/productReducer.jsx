import { CHOOSEN_PRODUCT, PRODUCT_SUCCESS, PRODUCT_FAILURE } from "../actions/productActions";

const initState = {
    title: "name",
    body: "description"
}

const itemsReducer = (state = initState, action) => {
    switch (action.type){

        case PRODUCT_SUCCESS:
        return {
            ...state,
            title: action.payload.name,
            body: action.payload.description
        };

        case PRODUCT_FAILURE:
            return state;

        default:
            return state;
    }
};

export default itemsReducer;
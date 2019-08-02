import { catalogList, catalogSuccess, catalogFailure } from "../actions/itemsActions";

const initState = {
    catalog: []
}

const itemsReducer = (state = initState, action) => {
    switch (action.type){
        case catalogSuccess:
            return {
                ...state,
                catalog: action.payload
            };

        case catalogFailure:
            return state;

        default:
            return state;
    }
};

export default itemsReducer;

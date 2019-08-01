import { dropdownList, listSuccess, listFailure } from "../actions/categoriesActions";

const initState = {
    categories: []
}

const categoryReducer = (state = initState, action) => {
    switch (action.type){
        case listSuccess:
            console.log(action.payload);
            return {
                ...state,
                categories: action.payload
            };
        case listFailure:
                console.log(action.payload);
        default:
            return state;
    }
}

export default categoryReducer;

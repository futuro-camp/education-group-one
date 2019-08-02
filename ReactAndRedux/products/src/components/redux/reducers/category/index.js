import actions from "../../actions";

const initialState = {
    categoryList: [],
    categoryLoading: false
}

export default (state = initialState ,action) => {
    switch(action.type) {
        case actions.CATEGORY_LIST_REQUEST:
            return {
                ...state,
                categoryLoading: true
            }

        case actions.CATEGORY_LIST_SUCCESS:
            return {
                ...state,
                categoryList: action.payload,
                categoryLoading: false
            }

        case actions.CATEGORY_LIST_REJECT:
                return {
                    ...state,
                    categoryList: action.payload,
                    categoryLoading: false
                }

        default: 
            return state;
    }
}
import actions from "../../actions";

const initialState = {
    itemList: [],
    item: {},
    listLoading: false,
    itemLoading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.ITEM_LIST_REQUEST: 
            return {
                ...state,
                listLoading: true
            }

        case actions.ITEM_REQUEST: 
            return {
                ...state,
                itemLoading: true
            }

        case actions.ITEM_LIST_SUCCESS: 
            return {
                ...state,
                itemList: action.payload,
                listLoading: false
            }

        case actions.ITEM_LIST_REJECT: 
            return {
                ...state,
                listLoading: false
            }

        case actions.ITEM_SUCCESS: 
            return {
                ...state,
                item: action.payload,
                itemLoading: false
            }

        case actions.ITEM_REJECT: 
            return {
                ...state,
                itemLoading: false
            }

        default: 
            return state;
    }
}
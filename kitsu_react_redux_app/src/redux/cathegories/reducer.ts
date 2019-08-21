import { ICathegoriesStore, IAction } from "../../shared/interfaces";
import { ActionType } from "../../shared/enums";

const initialState:ICathegoriesStore = {
    categories: [],
    isLoaded: false,
    errorMessage: ""
}

export default function (state: object = initialState, action: IAction) {
    switch(action.type) {
        case(ActionType.CATEGORIES_REQUEST):
            return{
                ...state,
                isLoaded: false
            };

        case(ActionType.CATEGORIES_SUCCESS):
            return{
                ...state,
                isLoaded: true
            };
        
        case(ActionType.CATEGORIES_REJECT): 
            return{
                ...state,
                isLoaded: false,
                errorMessage: action.payload
            };

        default:
            return state;
    }
}

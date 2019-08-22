import { ICathegoriesStore, IAction } from "../../shared/interfaces";
import { ActionType } from "../../shared/enums";

const initialState: ICathegoriesStore = {
    categories: [],
    isLoaded: false,
    errorMessage: ""
}

export default function (state: any = initialState, action: IAction) {
    switch(action.type) {
        case(ActionType.CATEGORIES_REQUEST):
            return{
                ...state,
                isLoaded: false
            };

        case(ActionType.CATEGORIES_SUCCESS):
            return{
                ...state,
                isLoaded: true,
                categories: action.payload.data.data.map((element: any) => ({ id: element.id, name: element.attributes.title, nsfw: element.attributes.nsfw, description: element.attributes.description, slug: element.attributes.slug }))
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

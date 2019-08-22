import { IAnimeStore, IAction } from "../../shared/interfaces";
import { ActionType } from "../../shared/enums";

const initialState: IAnimeStore  = {
    anime: [],
    errorMessage:"",
    isLoaded: false
}

export default function (state: IAnimeStore = initialState, action: IAction) {
    switch(action.type) {
        case ActionType.ANIME_BY_CATEGORY_REQUEST:
            return {
                ...state,
                isLoaded: false
            };

        case ActionType.ANIME_BY_CATEGORY_SUCCESS:
            return {
                ...state,
                anime: action.payload.data.data.map((element: any) => ({ id: element.id, title: element.attributes.canonicalTitle, synopsis: element.attributes.synopsis, posterImage: element.attributes.posterImage})),
                isLoaded: true
            };

        case ActionType.ANIME_BY_CATEGORY_REJECT:
            return {
                ...state,
                errorMessage: action.payload,
                isLoaded: false
            };

        default: 
            return state;
    }
}
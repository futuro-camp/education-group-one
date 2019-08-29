import { IAnimeStore, IAction } from "../../shared/interfaces";
import { ActionType } from "../../shared/enums";

const initialState: IAnimeStore  = {
    anime: [],
    errorMessage:"",
    isLoaded: false,
    paginationLinks: []
}

export default function (state: IAnimeStore = initialState, action: IAction) {
    switch(action.type) {
        case ActionType.ANIME_BY_CATEGORY_REQUEST:
            return {
                ...state,
                isLoaded: false
            };

        case ActionType.ANIME_BY_CATEGORY_SUCCESS:
            Object.keys(action.payload.data.links).forEach((key) => action.payload.data.links[key].split("=").forEach((element : any, index: any, array: any) => array[index-1] === "18&page%5Boffset%5D" ? action.payload.data.links[key] = element.split("&")[0] : null));
            return {
                ...state,
                anime: action.payload.data.data.map((element: any) => ({ id: element.id, title: element.attributes.canonicalTitle, synopsis: element.attributes.synopsis, posterImage: element.attributes.posterImage, rank: element.attributes.popularityRank, rating: element.attributes.ratingRank })),
                isLoaded: true,
                paginationLinks: action.payload.data.links
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
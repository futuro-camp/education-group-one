import { IAnimeDetailsStore, IAction } from "../../shared/interfaces";
import { ActionType } from "../../shared/enums";

const initialState : IAnimeDetailsStore = {
    animeData: {},
    isLoaded: false,
    errorMessage: ""
}

export default function (state: any = initialState, action: IAction) {
    switch(action.type) {
        case ActionType.ANIME_DETAILS_REQUEST:
            return ({
                ...state,
                isLoadde: false
            });

        case ActionType.ANIME_DETAILS_SUCCESS:
        let { coverImage, posterImage, canonicalTitle, youtubeVideoId, synopsis, showType, status, ratingRank, popularityRank } = action.payload.data.data.attributes;
            return ({
                ...state,
                animeData: { coverImage: coverImage.large, posterImage: posterImage.large, canonicalTitle, youtubeVideoId, synopsis, showType, status, ratingRank, popularityRank },
                isLoaded: true
            });

        case ActionType.ANIME_DETAILS_REJECT:
            return ({
                ...state,
                errorMessage: "",
                isLoaded: false
            });

        default: 
            return state;
    }
}
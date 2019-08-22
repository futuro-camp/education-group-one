import {
    Actions
} from "../actions";

import {
    NavItems
} from "../constants";

const initState = {
    categories: [],
    anime: [],
    animePage: NavItems.all,
    offset: 0,
}

export default (state: any = initState, action: { type: Actions, payload?: any}) => {
    switch(action.type) {
        case Actions.GET_CATEGORIES:
            console.log(Actions.GET_CATEGORIES);
            break;
        case Actions.Error:
            console.log(action.payload);
            break;
        case Actions.GET_CATEGORIES_SUCCESS:
            return ({
                ...state,
                categories: action.payload
            });
        case Actions.GET_ANIME:
            console.log(Actions.GET_ANIME);
            break;
        case Actions.CHANGE_ANIME_PAGE:
            return ({
                ...state,
                anime: [],
                animePage: action.payload
            });         
        case Actions.UPDATE_ANIME:
            const offset = state.offset;
            return ({
                ...state,
                offset: offset + 18
            });
        case Actions.UPDATE_ANIME_SUCCESS:
            const anime = state.anime;
            return ({
                ...state,
                anime: [
                    ...anime,
                    ...action.payload
                ]
            });
        case Actions.GET_ANIME_SUCCESS:
            return ({
                ...state,
                anime: action.payload,
                offset: 0
            });
    }
    return state;
};

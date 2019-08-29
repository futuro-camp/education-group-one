import {
    Actions
} from "../actions";

const initState = {
    categories: [],
    categoryId: "-2",
    anime: [],
    nextLink: "",
    updating: false,
    fetching: false
}

export default (state: any = initState, action: { type: Actions, payload?: any}) => {
    switch(action.type) {
        case Actions.GET_ANIME_PAGE:
            return ({
                ...state,
                anime: [],
                categoryId: "-2"
            });
        case Actions.GET_ANIME_PAGE_SUCCESS:
            return ({
                ...state,
                anime: [action.payload]
            });
        case Actions.GET_CATEGORIES:
            return ({
                ...state
            });
        case Actions.Error:
            break;
        case Actions.GET_CATEGORIES_SUCCESS:
            return ({
                ...state,
                categories: action.payload
            });
        case Actions.GET_ANIME:
            return ({
                ...state,
                anime: [],
                animePage: action.payload,
                nextLink: "",
                fetching: true
            });          
        case Actions.UPDATE_ANIME:
            return ({
                ...state,
                updating: true
            });
        case Actions.UPDATE_ANIME_SUCCESS:
            return ({
                ...state,
                anime: [
                    ...state.anime,
                    ...action.payload.data
                ],
                nextLink: action.payload.nextLink,
                updating: false
            });
        case Actions.GET_ANIME_SUCCESS:
            return ({
                ...state,
                anime: action.payload.data,
                nextLink: action.payload.nextLink,
                updating: false,
                fetching: false
            });
        case Actions.CHANGE_CATEGORY:
                return ({
                    ...state,
                    anime: [],
                    categoryId: action.payload,
                    fetching: true
                });
    }
    return state;
};

export enum Actions {
    GET_CATEGORIES = "GET_CATEGORIES",
    GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS",
    GET_ANIME = "GET_ANIME",
    GET_ANIME_SUCCESS = "GET_ANIME_SUCCESS",
    UPDATE_ANIME = "UPDATE_ANIME",
    UPDATE_ANIME_SUCCESS = "UPDATE_ANIME_SUCCESS",
    CHANGE_ANIME_PAGE = "CHANGE_ANIME_PAGE",
    Error = "ERROR"
};

export const getCategories = () => ({
    type: Actions.GET_CATEGORIES
});

export const getTrendingAnime = () => ({
    type: Actions.GET_ANIME
});

export const changeAnimePage = (page: string) => ({
    type: Actions.CHANGE_ANIME_PAGE,
    payload: page
});

export const updateAnime = () => ({
    type: Actions.UPDATE_ANIME
});

export const action = (type: Actions, payload = {}) => ({
    type,
    payload
});

export enum Actions {
    GET_CATEGORIES = "GET_CATEGORIES",
    GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS",
    GET_ANIME = "GET_ANIME",
    GET_ANIME_SUCCESS = "GET_ANIME_SUCCESS",
    UPDATE_ANIME = "UPDATE_ANIME",
    UPDATE_ANIME_SUCCESS = "UPDATE_ANIME_SUCCESS",
    CHANGE_CATEGORY = "CHANGE_CATEGORY",
    GET_ANIME_PAGE = "GET_ANIME_PAGE",
    GET_ANIME_PAGE_SUCCESS = "GET_ANIME_PAGE_SUCCESS",
    Error = "ERROR"
};

export const getAnimePage = (payload: string) => ({
    type: Actions.GET_ANIME_PAGE,
    payload
});

export const getCategories = () => ({
    type: Actions.GET_CATEGORIES
});

export const changeCategory = (payload: string) => ({
    type: Actions.CHANGE_CATEGORY,
    payload
});

export const getAnime = (payload = "") => ({
    type: Actions.GET_ANIME,
    payload
});

export const updateAnime = () => ({
    type: Actions.UPDATE_ANIME
});

export const action = (type: Actions, payload = {}) => ({
    type,
    payload
});

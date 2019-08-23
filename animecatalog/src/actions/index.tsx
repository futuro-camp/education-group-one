
export const GET_CATEGORIES = "GET_CATEGORIES";
export function getCategories() {
    return { type: GET_CATEGORIES };
}
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const getCategoriesSuccess= (payload) => {
    return { type: GET_CATEGORIES_SUCCESS, payload };
}

export const GET_FILTERED = "GET_FILTERED";
export const getFiltered= (payload) => {
    return { type: GET_FILTERED, payload };
}
export const GET_FILTERED_SUCCESS = "GET_FILTERED_SUCCESS";
export const getFilteredSuccess= (payload) => {
    return { type: GET_FILTERED_SUCCESS, payload };
}

export const GET_DATA_ANIME = "GET_DATA_ANIME";
export function getAnime(payload) {
    return { type: GET_DATA_ANIME, payload };
}
export const GET_DATA_ANIME_SUCCESS = "GET_DATA_ANIME_SUCCESS";
export const getAnimeSuccess= (payload) => {
    return { type: GET_DATA_ANIME_SUCCESS, payload };
}
export const GET_TOP_ANIME = "GET_TOP_ANIME";
export function getTopAnime(payload) {
    return { type: GET_TOP_ANIME, payload };
}
export const GET_TOP_ANIME_SUCCESS = "GET_TOP_ANIME_SUCCESS";
export const  getTopAnimeSuccess = (payload) => {
    return { type: GET_TOP_ANIME_SUCCESS, payload };
}
export const GET_DATA_MANGA = "GET_DATA_MANGA";
export function getManga(payload) {
    return { type: GET_DATA_MANGA, payload };
}
export const GET_DATA_MANGA_SUCCESS = "GET_DATA_MANGA_SUCCESS";
export const getMangaSuccess= (payload) => {
    return { type: GET_DATA_MANGA_SUCCESS, payload };
}
export const GET_CHAPTERS_MANGA = "GET_CHAPTERS_MANGA";
export function getTopManga(payload) {
    return { type: GET_CHAPTERS_MANGA, payload };
}
export const GET_CHAPTERS_MANGA_SUCCESS = "GET_CHAPTERS_MANGA_SUCCESS";
export const  getChapstersMangaSuccess = (payload) => {
    return { type: GET_CHAPTERS_MANGA_SUCCESS, payload };
}

export const GET_SHOWMORE = "GET_SHOWMORE";
export function showMore(payload) {
    return { type: GET_SHOWMORE, payload };
}
export const GET_SHOWMORE_SUCCESS = "GET_SHOWMORE_SUCCESS";
export const  showMoreSuccess = (payload) => {
    return { type: GET_SHOWMORE_SUCCESS, payload };
}
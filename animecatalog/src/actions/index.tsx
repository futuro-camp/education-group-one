
export const GET_DATA = "GET_DATA";
export function getData() {
    return { type: GET_DATA };
}
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const getDataSuccess= (payload) => {
    return { type: GET_DATA_SUCCESS, payload };
}
export const GET_DATA_ANIME = "GET_DATA_ANIME";
export function getAnime() {
    return { type: GET_DATA_ANIME };
}
export const GET_DATA_ANIME_SUCCESS = "GET_DATA_ANIME_SUCCESS";
export const getAnimeSuccess= (payload) => {
    return { type: GET_DATA_ANIME_SUCCESS, payload };
}
export const GET_TOP_ANIME = "GET_TOP_ANIME";
export function getTopAnime() {
    return { type: GET_TOP_ANIME };
}
export const GET_TOP_ANIME_SUCCESS = "GET_TOP_ANIME_SUCCESS";
export const  getTopAnimeSuccess = (payload) => {
    return { type: GET_TOP_ANIME_SUCCESS, payload };
}
import {
    GET_CATEGORIES, GET_CATEGORIES_SUCCESS,
    GET_DATA_ANIME, GET_DATA_ANIME_SUCCESS,
    GET_TOP_ANIME, GET_TOP_ANIME_SUCCESS,
    GET_DATA_MANGA, GET_DATA_MANGA_SUCCESS,
    GET_CHAPTERS_MANGA, GET_CHAPTERS_MANGA_SUCCESS,
    GET_FILTERED, GET_FILTERED_SUCCESS
} from "../actions/index";

const initState = {
    categories: [],
    content: [],
    name: "",
    offset: 1,
    adress: "https://kitsu.io/api/edge/anime"
};

const mainPage = (state = initState, action:any) => {
    switch (action.type){

        case GET_CATEGORIES:
            return state;

        case GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload };

        case GET_FILTERED:
            return {...state, name: `Filtered by Slug: ${action.payload.title}`};

        case GET_FILTERED_SUCCESS:
            return { ...state, content: action.payload };

        case GET_DATA_ANIME:
            return state;

        case GET_DATA_ANIME_SUCCESS:
            return { ...state, content: action.payload, name: "Highest Rated Anime" };

        case GET_TOP_ANIME:
            return state;

        case GET_TOP_ANIME_SUCCESS:
            return { ...state, content: action.payload, name: "Anime created at 2001"};

        case GET_DATA_MANGA:
            return state;

        case GET_DATA_MANGA_SUCCESS:
            return { ...state, content: action.payload, name: "Highest Rated Manga" };

        case GET_CHAPTERS_MANGA:
            return state;

        case GET_CHAPTERS_MANGA_SUCCESS:
            return { ...state, content: action.payload, name: "Manga with 10 chapsters"};

        default:
            return state;
    }
};

export default mainPage;

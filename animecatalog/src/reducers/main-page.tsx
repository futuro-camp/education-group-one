import {
    GET_CATEGORIES, GET_CATEGORIES_SUCCESS,
    GET_DATA_ANIME, GET_DATA_ANIME_SUCCESS,
    GET_TOP_ANIME, GET_TOP_ANIME_SUCCESS,
    GET_DATA_MANGA, GET_DATA_MANGA_SUCCESS,
    GET_CHAPTERS_MANGA, GET_CHAPTERS_MANGA_SUCCESS,
    GET_FILTERED, GET_FILTERED_SUCCESS,
    GET_SHOWMORE, GET_SHOWMORE_SUCCESS,
    GET_SINGLE_ANIME, GET_SINGLE_ANIME_SUCCESS
} from "../actions/index";
import { history } from "../index";

const initState = {
    categories: [],
    content: [],
    name: "",
    offset: 0,
    adress: "anime",
    filter: "filter%5Bcategories%5D=",
    choosedCategory: "",
    singleAnime: {},

};

const mainPage = (state = initState, action:any) => {
    switch (action.type){

        case GET_CATEGORIES:
            return state;

        case GET_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload };

        case GET_FILTERED:
                // : ${action.payload.title}
            return {...state, name: `Filtered by Category`,choosedCategory: action.payload.slug ? action.payload.slug : action.payload };

        case GET_FILTERED_SUCCESS:
            return { ...state, content: action.payload };

        case GET_DATA_ANIME:
            action.payload.adress = "anime";
            return {...state, adress: action.payload.adress,  choosedCategory: ""};

        case GET_DATA_ANIME_SUCCESS:
            return { ...state, content: action.payload, name: "Highest Rated Anime", filter:"" };

        case GET_TOP_ANIME:
            action.payload.adress = "anime";
            return {...state, adress: action.payload.adress };

        case GET_TOP_ANIME_SUCCESS:
            return { ...state, content: action.payload, name: "Anime created at 2001", filter:"" };

        case GET_DATA_MANGA:
            action.payload.adress = "manga";
            return {...state, adress: action.payload.adress };

        case GET_DATA_MANGA_SUCCESS:
            return { ...state, content: action.payload, name: "Highest Rated Manga", filter:"" };

        case GET_CHAPTERS_MANGA:
            action.payload.adress = "manga";
            return {...state, adress: action.payload.adress };

        case GET_CHAPTERS_MANGA_SUCCESS:
            return { ...state, content: action.payload, name: "Manga with 10 chapsters", filter:"" };

        case GET_SHOWMORE:
            action.payload.offset+=4;
            return {...state, offset: action.payload.offset };

        case GET_SHOWMORE_SUCCESS:
            return { ...state, content: [...state.content, ...action.payload], filter:"" };

        case GET_SINGLE_ANIME:
            return {...state,  };

        case GET_SINGLE_ANIME_SUCCESS:
            let singleAnime= action.payload;
            return { ...state,  singleAnime: singleAnime };

        default:
            return {...state, };
    }
};

export default mainPage;

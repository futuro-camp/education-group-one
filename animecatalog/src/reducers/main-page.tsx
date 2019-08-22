import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ANIME, GET_DATA_ANIME_SUCCESS, GET_TOP_ANIME, GET_TOP_ANIME_SUCCESS  } from "../actions/index";

const initState = {
    categories: [],
    content: [],
    name: ""
};

const mainPage = (state = initState, action:any) => {
    switch (action.type){

        case GET_DATA:
            return state;

        case GET_DATA_SUCCESS:
            return { ...state, categories: action.payload };

        case GET_DATA_ANIME:
            return state;

        case GET_DATA_ANIME_SUCCESS:
            return { ...state, content: action.payload, name: "Highest Rated Anime" };

        case GET_TOP_ANIME:
            return state;

        case GET_TOP_ANIME_SUCCESS:
            return { ...state, content: action.payload, name: "Anime created at 2001"};

        default:
            return state;
    }
};

export default mainPage;

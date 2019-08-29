import { combineReducers } from "redux";
import categoriesReducer from "./cathegories/reducer";
import animeReducer from "./anime/reducer";
import animeDetailsReducder from "./animeDetails/reducer";

export default combineReducers(
    {
        categories: categoriesReducer,
        anime: animeReducer,
        animeDetails: animeDetailsReducder
    }
);

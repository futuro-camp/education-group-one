import { combineReducers } from "redux";
import categoriesReducer from "./cathegories/reducer";
import animeReducer from "./anime/reducer";

export default combineReducers(
    {
        categories: categoriesReducer,
        anime: animeReducer
    }
);

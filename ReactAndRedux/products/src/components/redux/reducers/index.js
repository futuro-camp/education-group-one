import { combineReducers } from "redux";
import accountReducer from "./account";
import categoryReducer from "./category";
import itemsReducer from "./items";

export default combineReducers({accountReducer, categoryReducer, itemsReducer});
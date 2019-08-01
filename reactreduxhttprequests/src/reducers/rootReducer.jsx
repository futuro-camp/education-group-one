import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import itemsReducer from "./itemsReducer";
import productReducer from "./productReducer";

export default  combineReducers ({
    userReducer,
    categoryReducer,
    itemsReducer,
    productReducer
});


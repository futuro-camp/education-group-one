import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import pageReducer from "./pageReducer";

export default combineReducers({loginReducer, pageReducer});

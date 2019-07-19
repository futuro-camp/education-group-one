import {ADD_TO_LIST, 
        CHANGE_NAME, 
        CHANGE_OLD_PRICE, 
        CHANGE_CURRENT_PRICE, 
        REMOVE_FROM_LIST} from "../actions";
import { connect } from "tls";

const initialValues = {
    idCount: 0,
    list: [],
    name: "",
    oldPrice: "",
    curPrice: ""
}

export default (state = initialValues, action) => {
    switch(action.type){
        case ADD_TO_LIST:
            let {name, oldPrice, curPrice, idCount} = state;
            if(name.trim() && oldPrice.trim() && curPrice.trim()){
                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id: idCount,
                            name,
                            oldPrice,
                            curPrice}],
                    idCount: idCount + 1,
                    name: "",
                    oldPrice: "",
                    curPrice: ""
                };
            } else {
                return state;
            }
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            };
        case CHANGE_OLD_PRICE:
            return {
                ...state,
                oldPrice: action.payload
            };
        case CHANGE_CURRENT_PRICE:
            return {
                ...state,
                curPrice: action.payload
            };
        case REMOVE_FROM_LIST:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload)
            };
        default:
            return state;
    }
};

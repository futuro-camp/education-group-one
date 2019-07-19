
import { ADD_ITEM, REMOVE_ITEM, CHANGE_NAME, CHANGE_PRICE, CHANGE_DISCOUNT} from "../constants/action-types";
//Creating "Initial Storage"
const initialState = {
    idCounter: 0,
    list: [],
    name: "",
    price: "",
    discount: ""
};
//Instructions for Reducer (Manager)
function rootReducer(state, action) {
    if(!state) {
        return initialState;
    }
    if (action.type === ADD_ITEM) {
        let {idCounter, name, price, discount, list } = state;
        return { ...state,
                    list: [ ...list,
                        {
                            id: idCounter,
                            name,
                            price,
                            discount
                        }
                    ],
                idCounter:idCounter+1,
                name:"",
                price: "",
                discount: ""};
    }
    else if (action.type === REMOVE_ITEM) {
        return {...state,
                    list: state.list.filter((el) => el.id !== action.payload)};
    }
    else if (action.type === CHANGE_NAME) {
        return { ...state,
                    name: action.payload.target.value};
    }
    else if (action.type === CHANGE_PRICE) {
        return { ...state,
                    price: action.payload.target.value};
    }
    else if (action.type === CHANGE_DISCOUNT) {
        return { ...state,
                    discount: action.payload.target.value};
    }
    return state;
}

export default rootReducer;

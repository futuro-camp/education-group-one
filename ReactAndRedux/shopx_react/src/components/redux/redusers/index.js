import { actionType } from "../actons";

const initialState = {
    cards: [],
    name: "",
    oldPrice: "",
    currentPrice: "",
    lastIndex: 0
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actionType.ADD_TO_LIST:
            return {
                ...state,
                name: "",
                oldPrice: "",
                currentPrice: "",
                cards: [
                    ...state.cards,
                    { 
                        id: state.lastIndex,
                        name: state.name,
                        oldPrice: state.oldPrice,
                        currentPrice: state.currentPrice,
                    }
                ],
                lastIndex: state.lastIndex + 1
            };

        case actionType.NAME_CHANGE:
            return {
                ...state,
                name: action.payload
            };

        case actionType.CURRENT_PRICE_CHANGE:
            return {
                ...state,
                currentPrice: action.payload
            };

        case actionType.OLD_PRICE_CHANGE:
            return {
                ...state,
                oldPrice: action.payload
            };

        case actionType.REMOVE_FROM_LIST:
            return {
                ...state, 
                cards: state.cards.filter((element) => element.id !== action.payload)
            };
             
        default:
            return state;
    }
        
}
import { choosenProduct, productSuccess, productFailure } from "../actions/productActions";

const initState = {
    title: "name",
    body: "description"
}

const itemsReducer = (state = initState, action) => {
    switch (action.type){
        case productSuccess:
            console.log(action.payload);
            return {
                ...state,
                title: action.payload.title,
                body: action.payload.body
            };
        case productFailure:
                console.log(action.payload);
        default:
            return state;
    }
}

export default itemsReducer;
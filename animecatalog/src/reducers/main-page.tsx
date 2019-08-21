import { GET_DATA, GET_DATA_SUCCESS } from "../actions/index";

const initState = {
    content: []
};

const mainPage = (state = initState, action:any) => {
    switch (action.type){

        case GET_DATA:
            return state;

        case GET_DATA_SUCCESS:
            console.log("i have");
            return { ...state, content: action.payload };


        default:
            return state;
    }

};

export default mainPage;

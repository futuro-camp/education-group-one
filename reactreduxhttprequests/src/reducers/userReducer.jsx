import { login, loginSuccess, loginFailure } from "../actions/loginActions";
const initState = {
    login: "username",
    password: "secret",
    auth:"keygen from server"
}

const userReducer = (state = initState, action) => {
    switch (action.type){
        case loginSuccess:
            console.log(action.payload);
            return { ...state, auth: action.payload };
        case loginFailure:
            console.log(action.payload);
        case email:
            console.log()
        case password:
            console.log()
        default:
            return state;
    }
}

export default userReducer;
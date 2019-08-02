import actions from "../../actions";

const initialState = {
    login: "",
    password: "",
    key: "",
    accountLoading: false,
    userLogged: false, 
    error: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actions.LOGIN_INPUT_UPDATE:
            return {
                ...state,
                login: action.payload
            }

        case actions.PASSWORD_INPUT_UPDATE:
            return {
                ...state,
                password: action.payload
            }

        case actions.LOGIN_REQUEST:
            return {
                ...state,
                accountLoading: true
            }

        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                key: action.payload,
                accountLoading: false,
                userLogged: true
            }

        case actions.LOGIN_REJECT:
            return {
                ...state,
                accountLoading: false,
                error: action.payload
            }

        default: 
            return state;
    }
}
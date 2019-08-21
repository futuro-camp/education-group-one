import actions from './actions.js';

const initialState = { 
    daysData: [],
    daysLoading: true,
    currentChoosed: 0,
    daysLoadError: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.FIVE_DAYS_GET:
            return {
                ...state,
                daysLoading: true
            };

        case actions.FIVE_DAYS_SUCCESS:
            return {
                ...state,
                daysData: action.payload,
                daysLoading: false
            };
        

        case actions.FIVE_DAYS_REJECT:
            return {
                ...state,
                daysLoading: false,
                daysLoadError: action.payload
            }
    

        case actions.CURRENT_DAY_CHANGE:
            return {
                ...state,
                currentChoosed: action.payload
            }
    
        default:
            return state
    }
}


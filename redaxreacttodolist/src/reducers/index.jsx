
import { CHANGE_TITLE, CHANGE_INPUT_VALUE, ADD_TASK, CHECK_BOX} from "../actions";
//Creating "Initial Storage"
const initialState = { list:[ { id:0, name:"", status:false } ],
                        idCounter:0,
                        title:"Default",
                        completed:0,
                        total:0,
                        inputValue:"" };

function rootReducer(state, action) {
    if(!state) {
        return initialState;
    }
    if (action.type === CHANGE_TITLE) {
        let { list, idCounter, title, completed, total, inputValue } = state;
        return { ...state, title, completed, total};
    }
    else if (action.type === CHANGE_INPUT_VALUE) {
        let { list, idCounter, title, completed, total, inputValue } = state;
        return { ...state};
    }
    else if (action.type === ADD_TASK) {
        let { list, idCounter, title, completed, total, inputValue } = state;
        return { ...state};
    }
    else if (action.type === CHECK_BOX) {
        let { list, idCounter, title, completed, total, inputValue } = state;
        return { ...state};
    }
}

export default rootReducer;

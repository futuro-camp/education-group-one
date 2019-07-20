
import { CHANGE_TITLE, CHANGE_INPUT_VALUE, ADD_TASK, CHECK_BOX, REMOVE_TASK} from "../actions";
//Creating "Initial Storage"
const initialState = {
    list:[],
    title:"",
    completed:0,
    total:0,
    inputValue:""
};
//Main reducer with instructions for each action
function rootReducer(state, action) {
    if(!state) {
        return initialState;
    }

    if (action.type === CHANGE_TITLE) {
        const { newTitle }  = action.payload;
        return { ...state, title:newTitle};
    }

    if  (action.type === CHANGE_INPUT_VALUE) {
        const newInputValue  = action.payload;
        return { ...state, inputValue:newInputValue};
    }

    if (action.type === ADD_TASK) {
        const { list ,inputValue } = state;
        const updatedList = [...list, {id:list.length, name:inputValue, status:false}]
        return {...state, list:updatedList, total:updatedList.length}
    }

    if (action.type === CHECK_BOX) {
        const { list } = state;
        const id = action.payload;
        const newList = list.map((el) => el.id===id ? {...el, status:!el.status}:el)
        return { ...state,
            list:newList,
            completed: newList.filter(it=>it.status).length
        };
    }

    if (action.type === REMOVE_TASK) {
        const { list } = state;
        const id = action.payload;
        const newList = list.filter((el) => el.id!==id)
        return {
            ...state,
            list:newList,
            completed: newList.filter(it=>it.status).length,
            total: newList.length
        };
    }
    return state;
}

export default rootReducer;

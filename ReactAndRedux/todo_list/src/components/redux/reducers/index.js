import { actionType } from "../actions";

const initialStore = {
    taskList: [],
    title: "Name",
    inputValue: "",
    lastId: 0,
    doneCounter: 0,
    totalCounter: 0
}

export default function reduser(state = initialStore, action) {
    switch(action.type) {
        case (actionType.ADD_TASK):
            return ({
                ...state,
                taskList: [
                    ...state.taskList,
                    { id: state.lastId, name: state.inputValue, status: false }
                ],
                inputValue: "",
                lastId: state.lastId + 1,
                totalCounter: state.totalCounter + 1
            });

        case (actionType.CHANGE_INPUT_VALUE):
            return ({
                ...state,
                inputValue: action.payload
            });

        case (actionType.CHANGE_TASK):
            return ({
                ...state,
                taskList: state.taskList.map((element) => {
                    if(element.id === action.payload.id) {
                        element.name = action.payload.value;
                        return element;
                    }
                    else {
                        return element;
                    }
                })
            });

        case (actionType.CHANGE_TITLE):
            return ({
                ...state,
                title: action.payload
            });

        case (actionType.CHECK):
            let status;
            return ({
                ...state,
                taskList: state.taskList.map((element) => {
                    if(element.id === action.payload) {
                        status = element.status;
                        element.status = !element.status;
                        return element;
                    }
                    else {
                        return element;
                    }
                }),
                doneCounter: !status ? state.doneCounter + 1 : state.doneCounter - 1
            });

        case (actionType.REMOVE_TASK): 
            return ({
                ...state,
                taskList: state.taskList.filter((element) => element.id !== action.payload),
                totalCounter: state.totalCounter - 1
            });

        default:
            return state;
    }
} 

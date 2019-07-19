import {    ADD_TASK, 
            CHANGE_INPUT_VALUE, 
            CHANGE_STATUS,
            CHANGE_TASK_TITLE,
            CHANGE_TITLE,
            REMOVE_TASK } from "../actions";

const initialState = {
    list: [],
    idCounter: 0,
    doneCounter: 0,
    totalCounter: 0,
    title: "Name",
    inputValue: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return ({
                ...state,
                list: [
                    ...state.list,
                    {
                        id: state.idCounter,
                        name: state.inputValue,
                        status: false
                    }
                ],
                totalCounter: state.totalCounter + 1,
                inputValue: "",
                idCounter: state.idCounter + 1
            });
        case CHANGE_INPUT_VALUE:
            return ({
                ...state,
                inputValue: action.payload
            });
        case CHANGE_STATUS: 
            let doneStatusCount = state.doneCounter;
            return ({
                ...state,
                list: state.list.map(task => {
                    if(task.id === action.payload){
                        task.status ? doneStatusCount-- : doneStatusCount++;
                        return { id: task.id, name: task.name, status: !task.status }
                    } else {
                        return task;
                    }
                }),
                doneCounter: doneStatusCount
            });
        case CHANGE_TASK_TITLE:
            return ({
                ...state,
                list: state.list.map(task => {
                    if(task.id === action.payload.id){
                        return { id: task.id, name: action.payload.value, status: task.status }
                    } else {
                        return task;
                    }
                })
            });
        case CHANGE_TITLE:
            return ({
                ...state,
                title: action.payload
            });
        case REMOVE_TASK: 
            let doneRemoveCount = state.doneCounter;
            return ({
                ...state,
                list: state.list.filter(task => {
                    if(task.id === action.payload){
                        doneRemoveCount = task.status ? doneRemoveCount - 1 : doneRemoveCount;
                        return false;
                    } else {
                        return true;
                    }
                }),
                doneCounter: doneRemoveCount,
                totalCounter: state.totalCounter - 1
            });
        default: 
            return state;
    }
}

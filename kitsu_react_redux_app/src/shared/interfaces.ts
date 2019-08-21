import { ActionType } from "./enums";

export interface ICathegoriesStore {
    categories: Array<object>,
    isLoaded: boolean,
    errorMessage: string
}

export interface IAction {
    type: ActionType,
    payload?: object
}

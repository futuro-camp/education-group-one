import { ActionType } from "../../shared/enums";
import { IAction } from "../../shared/interfaces";

export function requestCategories() {
    return { type: ActionType.CATEGORIES_REQUEST };
} 

export function categoriesSuccess(data:any) : IAction {
    return { type: ActionType.CATEGORIES_SUCCESS, payload: data }
}

export function categoriesReject(error:any) : IAction {
    return { type: ActionType.CATEGORIES_REJECT, payload: error }
}


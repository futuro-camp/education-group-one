import { ActionType } from "../../shared/enums";
import { IAction } from "../../shared/interfaces";

export function requestAnimeByCategory(payload: any) : IAction {
    return { type: ActionType.ANIME_BY_CATEGORY_REQUEST, payload };
} 

export function animeByCategotySuccess(data:any) : IAction {
    return { type: ActionType.ANIME_BY_CATEGORY_SUCCESS, payload: data };
}

export function animeByCategotyReject(error:any) : IAction {
    return { type: ActionType.ANIME_BY_CATEGORY_REJECT, payload: error };
}

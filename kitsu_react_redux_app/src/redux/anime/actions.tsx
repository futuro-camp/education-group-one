import { ActionType } from "../../shared/enums";
import { IAction } from "../../shared/interfaces";

export function requestAnimeByCategoty(category: string) {
    return { type: ActionType.ANIME_BY_CATEGORY_REQUEST, category };
} 

export function animeByCategotySuccess(data:any) : IAction {
    return { type: ActionType.ANIME_BY_CATEGORY_SUCCESS, payload: data }
}

export function animeByCategotyReject(error:any) : IAction {
    return { type: ActionType.ANIME_BY_CATEGORY_REJECT, payload: error }
}

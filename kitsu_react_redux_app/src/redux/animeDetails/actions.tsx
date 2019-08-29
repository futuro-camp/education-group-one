import { ActionType } from "../../shared/enums";
import { IAction } from "../../shared/interfaces";

export function requestAnimeDetails(payload: any) : IAction {
    return { type: ActionType.ANIME_DETAILS_REQUEST, payload };
}

export function animeDetailsSuccess(data: any) : IAction {
    return { type: ActionType.ANIME_DETAILS_SUCCESS, payload: data };
}

export function animeDetailsReject(error: any) : IAction {
    return { type: ActionType.ANIME_DETAILS_REJECT, payload: error };
}

import { ActionType } from "./enums";

export interface ICathegoriesStore {
    categories: Array<object>;
    isLoaded: boolean;
    errorMessage: string;
}

export interface IAnimeStore {
    anime: Array<object>;
    isLoaded: boolean;
    errorMessage: string;
    paginationLinks: Array<string>;
}

export interface IAction {
    type: ActionType;
    payload?: any;
}

export interface IAnimeDetailsStore {
    animeData: any;
    isLoaded: boolean;
    errorMessage: string;
}

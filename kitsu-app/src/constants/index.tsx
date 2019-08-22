import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export enum NavItems {
    all = "anime?page",
    thrending = "trending/anime?",
    highRated = "anime?sort=-averageRating&page"
}

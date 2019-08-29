import categories from "./categoties";
import { requestAnimeByCategory } from "./anime";
import { requestAnimeDetailes } from "./animeDetails";
import { ActionType } from "../shared/enums";
import { all, takeLatest } from "redux-saga/effects";

export default function* CombinedSaga() {
    yield all ([
        yield takeLatest(ActionType.ANIME_BY_CATEGORY_REQUEST, requestAnimeByCategory),
        yield takeLatest(ActionType.CATEGORIES_REQUEST, categories),
        yield takeLatest(ActionType.ANIME_DETAILS_REQUEST, requestAnimeDetailes)
    ]);
}
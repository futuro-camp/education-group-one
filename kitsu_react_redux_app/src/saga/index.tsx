import categories from "./categoties";
import anime from "./anime";
import { ActionType } from "../shared/enums";
import { all, takeLatest } from "redux-saga/effects";

export default function* CombinedSaga() {
    yield all ([
        yield takeLatest(ActionType.ANIME_BY_CATEGORY_REQUEST, anime),
        yield takeLatest(ActionType.CATEGORIES_REQUEST, categories)
    ]);
}
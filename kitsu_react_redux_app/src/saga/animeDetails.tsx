import axios from "axios";
import { call, put } from "redux-saga/effects";
import { animeDetailsSuccess, animeDetailsReject } from "../redux/animeDetails/actions";

export function* requestAnimeDetailes(action: any) {
    try {
        let answer = yield call(axios.get, `https://kitsu.io/api/edge/anime/${action.payload}`);
        yield put(animeDetailsSuccess(answer));
    }
    catch (error) {
        yield put(animeDetailsReject(error));
    }
}
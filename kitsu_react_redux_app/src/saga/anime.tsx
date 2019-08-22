import axios from "axios";
import { call, put } from "redux-saga/effects";
import { animeByCategotySuccess, animeByCategotyReject } from "../redux/anime/actions";

export default function* requestAnimeByCategory(action: any) {
    try {
        let responce = yield call(axios.get, `https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&filter%5Bcategories%5D=${action.category}&page%5Blimit%5D=20&sort=-start_date`);
        yield put(animeByCategotySuccess(responce));
    } catch(error) {
        yield put(animeByCategotyReject(error));
    }
}
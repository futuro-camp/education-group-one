import axios from "axios";
import { call, put } from "redux-saga/effects";
import { animeByCategotySuccess, animeByCategotyReject } from "../redux/anime/actions";

export function* requestAnimeByCategory(action: any) {
    let adress = action.payload.category !== "home" ? `https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${action.payload.category}&page%5Blimit%5D=18&page%5Boffset%5D=${action.payload.offset}&sort=-start_date` : `https://kitsu.io/api/edge/anime?&page%5Blimit%5D=18&page%5Boffset%5D=${action.payload.offset}&sort=-averageRating`;
    try {
        let responce = yield call(axios.get, adress);
        yield put(animeByCategotySuccess(responce));
    } catch(error) {
        yield put(animeByCategotyReject(error));
    }
}

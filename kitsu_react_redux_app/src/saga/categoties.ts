import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ActionType } from "../shared/enums";
import { categoriesSuccess, categoriesReject } from "../redux/cathegories/actions";


function* RequestCathegories() {
    try {
        let data = yield call(axios.get, "https://kitsu.io/api/edge/categories?page%5Blimit%5D=40&sort=-total_media_count");
        yield put(categoriesSuccess(data));
    } catch(error) {
        yield put(categoriesReject(error));
    }   
}

export default function* GetCathegories() {
    yield takeEvery(ActionType.CATEGORIES_REQUEST, RequestCathegories);
}

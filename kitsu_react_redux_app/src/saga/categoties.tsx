import axios from "axios";
import { call, put } from "redux-saga/effects";
import { categoriesSuccess, categoriesReject } from "../redux/cathegories/actions";

export default function* RequestCathegories() {
    try {
        let data = yield call(axios.get, "https://kitsu.io/api/edge/categories?page%5Blimit%5D=217&sort=title");
        yield put(categoriesSuccess(data));
    } catch (error) {
        yield put(categoriesReject(error));
    }   
}

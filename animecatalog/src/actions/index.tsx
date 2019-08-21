import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance, AxiosAdapter, Cancel, CancelToken, CancelTokenSource, Canceler } from "axios";
import { Dispatch, Action } from 'redux';
import { put, takeEvery, call, all } from "redux-saga/effects";

export const GET_DATA = "GET_DATA";
export function getData(payload) {
    return { type: GET_DATA };
}
export const GET_DATA_SUCCESS = "GET_DATA";
export function getDataSuccess(payload) {
    return { type: GET_DATA_SUCCESS, payload };
}
//worker
export function* catalogList() {
    try {
        console.log("start");
        let data = yield call(axios.get, "https://kitsu.io/api/edge/categories?page%5Blimit%5D=217&sort=title");
        yield put( {type: GET_DATA_SUCCESS, payload: data} );
    } catch (e) {
        console.log(e);
    }
}
//watcher
export function* saga() {
    yield takeEvery(GET_DATA, catalogList);
}

import { put, takeLatest, call, all } from "redux-saga/effects";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance, AxiosAdapter, Cancel, CancelToken, CancelTokenSource, Canceler } from "axios";

import { GET_DATA, GET_DATA_SUCCESS } from "../actions/index";

//worker
export function* catalogList() {
    try {
        let data = yield call(axios.get, "https://kitsu.io/api/edge/categories?page%5Blimit%5D=217&sort=title");
        // this entry form like  (x) => { return { object } }
        let sortedData = data.data.data.map( (el:any) => ({
            id: el.id,
            title: el.attributes.title,
            description: el.attributes.description,
            childCount: el.attributes.childCount,
            totalMediaCount: el.attributes.totalMediaCount
        }) );
        yield put( { type: GET_DATA_SUCCESS, payload: sortedData } );
    } catch (e) {
        console.log(e);
    }
}
//watcher
export function* saga() {
    yield takeLatest(GET_DATA, catalogList);
}
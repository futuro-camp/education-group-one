import { put, takeLatest, call, all } from "redux-saga/effects";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance, AxiosAdapter, Cancel, CancelToken, CancelTokenSource, Canceler } from "axios";

import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ANIME, GET_DATA_ANIME_SUCCESS } from "../actions/index";

//worker
export function* catalogList() {
    try {
        let data = yield call(axios.get, "https://kitsu.io/api/edge/categories?page%5Blimit%5D=217&sort=total_media_count");
        // console.log(data);
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
export function* catalogContent() {
    try {
        let data = yield call(axios.get, "https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&sort=-average_rating");
        // console.log(data.data.data);
        // this entry form like  (x) => { return { object } }
        let sortedAnimeData = data.data.data.map( (el:any) => ({
            id: el.id,
            startDate: el.attributes.startDate,
            ageRating: el.attributes.ageRating,
            showType: el.attributes.showType,
            canonicalTitle: el.attributes.canonicalTitle,
            averageRaiting: el.attributes.averageRating,
            posterImage: el.attributes.posterImage,
            popularityRank: el.attributes.popularityRank,
            ratingRank: el.attributes.ratingRank,
            synopsis: el.attributes.synopsis,
            userCount: el.attributes.userCount,
        }) );
        yield put( { type: GET_DATA_ANIME_SUCCESS, payload: sortedAnimeData } );
    } catch (e) {
        console.log(e);
    }
}
//watcher
export function* saga() {
    yield takeLatest(GET_DATA, catalogList);
    yield takeLatest(GET_DATA_ANIME, catalogContent);
}
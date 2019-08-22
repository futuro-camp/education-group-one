import { put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ANIME, GET_DATA_ANIME_SUCCESS, GET_TOP_ANIME, GET_TOP_ANIME_SUCCESS } from "../actions/index";
import { getDataSuccess, getAnimeSuccess, getTopAnimeSuccess } from "../actions/index";

//worker
export function* catalogList() {
    try {
        let data = yield call(axios.get, "https://kitsu.io/api/edge/categories?page%5Blimit%5D=217&sort=");
        // console.log(data.data.data);

        // this entry form like  (x) => { return { object } }
        let sortedData = data.data.data.map( (el:any) => ({
            id: el.id,
            title: el.attributes.title,
            description: el.attributes.description,
            childCount: el.attributes.childCount,
            totalMediaCount: el.attributes.totalMediaCount
        }) );
        yield put( getDataSuccess(sortedData) );
    } catch (e) {
        console.log(e);
    }
}
export function* catalogContent() {
    try {
        let data = yield call(axios.get, "https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&sort=-averageRating");
        // console.log(data.data.data);

        // this entry form like  (x) => { return { object } }
        let sortedAnimeData = data.data.data.map( (el:any) => ({
            id: el.id,
            startDate: new Date(el.attributes.startDate).toLocaleString(`en-EU`, {year: 'numeric'}),
            ageRating: el.attributes.ageRating,
            showType: el.attributes.showType,
            canonicalTitle: el.attributes.canonicalTitle,
            averageRaiting: el.attributes.averageRating,
            posterImage: el.attributes.posterImage,
            popularityRank: el.attributes.popularityRank,
            ratingRank: el.attributes.ratingRank,
            synopsis: el.attributes.synopsis,
            userCount: el.attributes.userCount,
            slug: el.attributes.slug
        }) );
        yield put( getAnimeSuccess(sortedAnimeData) );
    } catch (e) {
        console.log(e);
    }
}

//for filter
// let data = yield call(axios.get, "https://kitsu.io/api/edge/categories?filter%5Bslug%5D=war");

export function* catalogTopContent() {
    try {
        let data = yield call(axios.get, "https://kitsu.io/api/edge/anime?filter%5BseasonYear%5D=2001&page%5Blimit%5D=20");
        // this entry form like  (x) => { return { object } }
        // console.log(data.data.data);
        let sortedTopAnimeData = data.data.data.map( (el:any) => ({
            id: el.id,
            startDate: new Date(el.attributes.createdAt).toLocaleString(`en-EU`, {year: 'numeric'}),
            ageRating: el.attributes.childCount,
            showType: el.attributes.showType,
            canonicalTitle: el.attributes.canonicalTitle,
            averageRaiting: el.attributes.averageRating,
            posterImage: el.attributes.posterImage,
            popularityRank: el.attributes.popularityRank,
            ratingRank: el.attributes.ratingRank,
            synopsis: el.attributes.synopsis,
            userCount: el.attributes.userCount,
            slug: el.attributes.slug
        }) );
        yield put( getTopAnimeSuccess(sortedTopAnimeData) );
    } catch (e) {
        console.log(e);
    }
}
//watcher
export function* saga() {
    yield takeLatest(GET_DATA, catalogList);
    yield takeLatest(GET_DATA_ANIME, catalogContent);
    yield takeLatest(GET_TOP_ANIME, catalogTopContent);
}

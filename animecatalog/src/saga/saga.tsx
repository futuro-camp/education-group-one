import axios from "axios";
import { put, takeLatest, call } from "redux-saga/effects";
import {
    GET_CATEGORIES, GET_CATEGORIES_SUCCESS,
    GET_DATA_ANIME, GET_DATA_ANIME_SUCCESS,
    GET_TOP_ANIME, GET_TOP_ANIME_SUCCESS,
    GET_DATA_MANGA, GET_DATA_MANGA_SUCCESS,
    GET_CHAPTERS_MANGA, GET_CHAPTERS_MANGA_SUCCESS,
    GET_FILTERED, GET_FILTERED_SUCCESS,
    GET_SHOWMORE, GET_SHOWMORE_SUCCESS
} from "../actions/index";
import {
    getCategoriesSuccess,
    getAnimeSuccess,
    getTopAnimeSuccess,
    getMangaSuccess,
    getChapstersMangaSuccess,
    getFilteredSuccess,
    showMoreSuccess
} from "../actions/index";
// SAGA workers !!!!!!!!!!!!!!!!!!!!!!!!!!!
export function* categoryList() {
    try {
        let data = yield call(axios.get, "https://kitsu.io/api/edge/categories?page%5Blimit%5D=217&sort=-total_media_count");
        // console.log(data.data.data);
        let sortedData = data.data.data.map( (el:any) => ({
            id: el.id,
            title: el.attributes.title,
            description: el.attributes.description,
            childCount: el.attributes.childCount,
            totalMediaCount: el.attributes.totalMediaCount,
            slug: el.attributes.slug
        }) );
        yield put( getCategoriesSuccess(sortedData) );
    } catch (e) {
        console.log(e);
    }
}
export function* categoryFilter(payload) {
    try {
        let data = yield call(axios.get, `https://kitsu.io/api/edge/anime?filter%5Bcategories%5D=${payload.payload.slug}&page%5Blimit%5D=4&%5Bsort%5D=id`);
        // console.log(data.data.data);
        let sortedData = data.data.data.map( (el:any) => ({
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
        yield put( getFilteredSuccess(sortedData) );
    } catch (e) {
        console.log(e);
    }
}
export function* defaultCatalogAnime(payload) {
    try {
        let data = yield call(axios.get, `https://kitsu.io/api/edge/${payload.payload.adress}?page%5Boffset%5D=${payload.payload}&page%5Blimit%5D=4&sort=id`);
        // console.log(data.data.data);
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
export function* topCatalogAnime(payload) {
    try {
        let data = yield call(axios.get, `https://kitsu.io/api/edge/${payload.payload.adress}?filter%5BseasonYear%5D=2001&page%5Blimit%5D=4`);
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
export function* defaultCatalogManga(payload) {
    try {
        let data = yield call(axios.get, `https://kitsu.io/api/edge/${payload.payload.adress}?page%5Blimit%5D=4&sort=-averageRating`);
        // console.log(data.data.data);
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
        yield put( getMangaSuccess(sortedAnimeData) );
    } catch (e) {
        console.log(e);
    }
}
export function* chaptersCatalogManga(payload) {
    try {
        let data = yield call(axios.get, `https://kitsu.io/api/edge/${payload.payload.adress}?filter%5BchapterCount%5D=10&page%5Blimit%5D=4`);
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
        yield put( getChapstersMangaSuccess(sortedTopAnimeData) );
    } catch (e) {
        console.log(e);
    }
}
export function* showMore(payload) {
    try {
        let data = yield call(axios.get, `https://kitsu.io/api/edge/${payload.payload.adress}?${payload.payload.filter}${payload.payload.choosedCategory}&page%5Boffset%5D=${payload.payload.offset}&page%5Blimit%5D=4&sort=-averageRating`);
        console.log(data.data.data);
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
        yield put( showMoreSuccess(sortedTopAnimeData) );
    } catch (e) {
        console.log(e);
    }
}
//SAGA watcher !!!!!!!!!!!!!!!!!!!!!!!!!!!
export function* saga() {
    yield takeLatest(GET_CATEGORIES, categoryList);
    yield takeLatest(GET_FILTERED, categoryFilter);
    yield takeLatest(GET_DATA_ANIME, defaultCatalogAnime);
    yield takeLatest(GET_TOP_ANIME, topCatalogAnime);
    yield takeLatest(GET_DATA_MANGA, defaultCatalogManga);
    yield takeLatest(GET_CHAPTERS_MANGA, chaptersCatalogManga);
    yield takeLatest(GET_SHOWMORE, showMore);
}

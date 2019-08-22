import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import axios from "axios";
import { action, Actions } from "../actions";

export function* fetch() {
    yield all([
        takeLatest(Actions.GET_CATEGORIES, getCategories),
        takeLatest([Actions.GET_ANIME, Actions.CHANGE_ANIME_PAGE], getAnime),
        takeLatest(Actions.UPDATE_ANIME, updateAnime)
    ]);
};

function* getCategories() {
    try{
        const data = yield call(axios.get, "https://kitsu.io/api/edge/categories?page%5Blimit%5D=260&sort=title");
        yield put(action(Actions.GET_CATEGORIES_SUCCESS, data.data.data.map((element: any) => ({
            id: element.id,
            title: element.attributes.title,
            description: element.attributes.description
        }))));
    } catch (e) {
        yield put(action(Actions.Error));
    }
};

function* getAnime() {
    try {
        const store = yield select((state) => state);
        const data = yield call(axios.get, `https://kitsu.io/api/edge/${store.animePage}%5Blimit%5D=18&page%5Boffset%5D=${store.offset}`);
        console.log(data);
        yield put(action(Actions.GET_ANIME_SUCCESS, data.data.data.map((element: any) => ({
            id: element.id,
            episodeCount: element.attributes.episodeCount,
            episodeLength: element.attributes.episodeLength,
            startDate: new Date(element.attributes.startDate).toLocaleString('eu-EU', {year: "numeric"}),
            title: element.attributes.canonicalTitle,
            image: {
                large: element.attributes.posterImage.large,
                medium: element.attributes.posterImage.medium,
                original: element.attributes.posterImage.original,
                small: element.attributes.posterImage.small,
                tiny: element.attributes.posterImage.tiny,
            },
            description: element.attributes.synopsis
        }))));
    } catch(e) {
        console.log(e);
    }
}

function* updateAnime() {
    try {
        const store = yield select((state) => state);
        const data = yield call(axios.get, `https://kitsu.io/api/edge/${store.animePage}%5Blimit%5D=18&page%5Boffset%5D=${store.offset}`);
        console.log(data.data.data.map((element: any) => ({
            id: element.id,
            title: element.attributes.canonicalTitle,
            image: {
                large: element.attributes.posterImage.large,
                medium: element.attributes.posterImage.medium,
                original: element.attributes.posterImage.original,
                small: element.attributes.posterImage.small,
                tiny: element.attributes.posterImage.tiny,
            },
            description: element.attributes.synopsis
        })));
        yield put(action(Actions.UPDATE_ANIME_SUCCESS, data.data.data.map((element: any) => ({
            id: element.id,
            title: element.attributes.canonicalTitle,
            image: {
                large: element.attributes.posterImage.large,
                medium: element.attributes.posterImage.medium,
                original: element.attributes.posterImage.original,
                small: element.attributes.posterImage.small,
                tiny: element.attributes.posterImage.tiny,
            },
            description: element.attributes.synopsis
        }))));
    } catch(e) {
        console.log(e);
    }
}

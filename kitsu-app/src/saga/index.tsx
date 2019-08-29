import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import axios from "axios";
import { action, Actions } from "../actions";

export function* fetch() {
    yield all([
        takeLatest(Actions.GET_CATEGORIES, getCategories),
        takeLatest([Actions.GET_ANIME,Actions.CHANGE_CATEGORY], getAnime),
        takeLatest(Actions.UPDATE_ANIME, updateAnime),
        takeLatest(Actions.GET_ANIME_PAGE, getAnimePage)
    ]);
};

function* getCategories() {
    try{
        let response = yield call(axios.get, "https://kitsu.io/api/edge/categories?page");
        response = yield call(axios.get, `https://kitsu.io/api/edge/categories?page%5Blimit%5D=${response.data.meta.count}`);
        const { data } = response.data;
        yield put(action(Actions.GET_CATEGORIES_SUCCESS, data.map((element: any) => ({
            id: element.id,
            title: element.attributes.title,
            anime: element.relationships.anime.links.related,
            description: element.attributes.description
        }))));
    } catch (e) {
        yield put(action(Actions.Error));
    }
};

function* getAnimePage(payload: any) {
    try {
        const response = yield call(axios.get, `https://kitsu.io/api/edge/anime/${payload.payload}`);
        let { data } = response.data;
        let { attributes, relationships } = data;
        data = {
            id: data.id,
            ageRating: attributes.ageRatingGuide,
            averageRating: attributes.averageRating,
            title: attributes.canonicalTitle,
            coverImage: attributes.coverImage ? attributes.coverImage.original : null,
            startDate: attributes.startDate,
            endDate: attributes.endDate,
            image: attributes.posterImage ? attributes.posterImage.original : null,
            episodeCount: attributes.episodeCount,
            episodeLength: attributes.episodeLength,
            popularityRank: attributes.popularityRank,
            ratingRank: attributes.ratingRank,
            showType: attributes.showType,
            status: attributes.status,
            description: attributes.synopsis,
            youtube: attributes.youtubeVideoId,
            genres: relationships.genres.links.related,
            episodes: relationships.episodes.links.related,
            characters: relationships.characters.links.related
        };
        yield put(action(Actions.GET_ANIME_PAGE_SUCCESS, data))

    } catch (e) {
        console.log(e);
    }
}

function* getAnime(payload: any) {
    try {
        const { categoryId } = yield select((state) => state);
        let link = `https://kitsu.io/api/edge/anime?page%5Blimit%5D=18`;
        link = categoryId !== "-1" && categoryId !== "-2" ? `${(yield call(axios.get, `https://kitsu.io/api/edge/categories/${categoryId}`)).data.data.relationships.anime.links.related}?page%5Blimit%5D=18` : link;
        link = payload.type !== Actions.CHANGE_CATEGORY ? link + payload.payload : link;
        const response = yield call(axios.get, link);
        const { data, links } = response.data;
        yield put(action(Actions.GET_ANIME_SUCCESS, {
            data: data.map((element: any) => {
                let {id, attributes} = element;
                let { episodeCount, episodeLength, startDate, canonicalTitle, posterImage, synopsis } = attributes;
                return {
                    id: id,
                    episodeCount: episodeCount,
                    episodeLength: episodeLength,
                    startDate: new Date(startDate).toLocaleString('eu-EU', {year: "numeric"}),
                    title: canonicalTitle,
                    image: posterImage ? {
                        large: posterImage.large,
                        medium: posterImage.medium,
                        original: posterImage.original,
                        small: posterImage.small,
                        tiny: posterImage.tiny,
                    } : null,
                    description: synopsis
                };
            }),
        nextLink: links ? links.next : ""
    }));
    } catch(e) {
        console.log(e);
    }
}

function* updateAnime() {
    try {
        const { nextLink } = yield select((state) => state);
        const response = yield call(axios.get, nextLink);
        const { data, links } = response.data;
        yield put(action(Actions.UPDATE_ANIME_SUCCESS, {
            data: data.map((element: any) => {
                let {id, attributes} = element;
                let { episodeCount, episodeLength, startDate, canonicalTitle, posterImage, synopsis } = attributes;
                return {
                    id: id,
                    episodeCount: episodeCount,
                    episodeLength: episodeLength,
                    startDate: new Date(startDate).toLocaleString('eu-EU', {year: "numeric"}),
                    title: canonicalTitle,
                    image: posterImage ? {
                        large: posterImage.large,
                        medium: posterImage.medium,
                        original: posterImage.original,
                        small: posterImage.small,
                        tiny: posterImage.tiny,
                    } : null,
                    description: synopsis
                };
            }),
            nextLink: links ? links.next : ""
        }));
    } catch(e) {
        console.log(e);
    }
}

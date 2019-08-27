import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { put, takeEvery, all } from "redux-saga/effects";
import { saga } from "./saga/saga";
import {createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const store = createStore( rootReducer,  applyMiddleware(sagaMiddleware,  routerMiddleware(history)) );

sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

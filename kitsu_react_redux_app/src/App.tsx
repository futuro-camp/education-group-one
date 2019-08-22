import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./redux/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import CategoriesView from "./components/categoriesView";
import AnimeView from "./components/animeListView";
import './App.css';

const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(saga));
saga.run(rootSaga);

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="content-view">
          <AnimeView/>
          <CategoriesView/>
        </div>
      </Provider>
    </div>
  );
}

export default App;

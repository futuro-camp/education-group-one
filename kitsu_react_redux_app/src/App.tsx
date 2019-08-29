import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./redux/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./components/mainPage";
import AnimeDetails from "./components/animeDetails/animeDetails";
import Header from "./components/header";
import Footer from "./components/footer";
import './App.css';

const saga = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(saga));
saga.run(rootSaga);

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Header/>
          <Switch>
            <Route path="/list/:cathegoryName?/:offset?" component={HomePage}/>
            <Route exact path="/anime/details/:id?" component={AnimeDetails}/>
            <Redirect from="/" to="/list/home/"/>
          </Switch>
          <Footer/>
        </Provider>
      </Router> 
    </div>
  );
}

export default App;

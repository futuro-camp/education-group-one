import React, {useEffect} from 'react';
import './App.scss';
import { getData, getAnime }  from "./actions/index";
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from './reducers/main-page';
import Categories from "./components/categories";
import Content from "./components/content";

const App = (props:any) => {

  useEffect( () => {
    props.getData();
    props.getAnime();
  }, []);
  // console.log(props.mainPage.content);

  return (
    <div className="main">
      <h1 className="pageHeading">Anime=Life <span role="img" aria-label="Love">💗</span></h1>
      <div className="App">
        <Content />
        <Categories />
      </div>
    </div>
  );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return (
    {
      getData: (payload) => { dispatch( getData(payload) ); },
      getAnime: (payload) => { dispatch( getAnime(payload) ); }
  }
  ); };
export default connect (mapStateToProps, dispatchToProps)(App);

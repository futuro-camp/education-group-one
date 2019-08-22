import React, {useEffect} from 'react';
import './App.scss';
import { getData }  from "./actions/index";
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from './reducers/main-page';
import Categories from "./components/categories";

const App: React.FC = (props:any) => {

  useEffect( () => {
    props.getData();
  }, []);
  // console.log(props.mainPage.content);

  return (
    <div className="main">
      <h1 className="pageHeading">Anime=Life <span role="img" aria-label="Love">💗</span></h1>
      <div className="App">
        <Categories />
      </div>
    </div>
  );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return (
    { getData: (payload) => { dispatch( getData(payload) ); } }
  ); };
export default connect (mapStateToProps, dispatchToProps)(App);

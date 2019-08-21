import React, {useEffect} from 'react';
import './App.scss';
import { catalogList, saga, getData }  from "./actions/index";
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from './reducers/main-page';

const App: React.FC = (props:any) => {

  useEffect( () => {
    props.getData();
  }, []);
  console.log(props.store.mainPage.content);
  return (
    <div className="App">
      <h1>Anime=Life <span role="img" aria-label="Love">💗</span></h1>
    </div>
  );
}

const mapStateToProps = (store:any) => { return { store }; };
const dispatchToProps = (dispatch:any)  => { return ( { getData: (payload) => { dispatch( getData(payload) ); } } ); };
export default connect (mapStateToProps, dispatchToProps)(App);

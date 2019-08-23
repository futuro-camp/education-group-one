import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/categories.scss";
import { getFiltered }  from "../actions/index";

const Categories = (props:any) => {

    useEffect( () => {
    }, []);
    // console.log(props.mainPage.categories);

    return (
        <div className="Categories">
            <h2 className="heading">&ensp;Categories: </h2>
            <ul className="link-container">
                {
                    props.mainPage.categories? props.mainPage.categories.map( (el) =>
                    <li key={el.id}>
                        <button onClick={ () => {props.getFiltered(el);} }>
                        &emsp;{el.title}
                        </button>
                    </li>
                    ) : <li></li>
                }
            </ul>
        </div>
    );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return {
    getFiltered: (object) => { dispatch( getFiltered(object) ); },
}; };
export default connect (mapStateToProps, dispatchToProps)(Categories);

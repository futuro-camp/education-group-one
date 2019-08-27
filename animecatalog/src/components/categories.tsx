import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/categories.scss";
import { getFiltered }  from "../actions/index";
import { Link } from 'react-router-dom';
import { history } from "../index";



const Categories = (props:any) => {

    useEffect( () => {
    }, [props.mainPage.content]);
console.log(props.mainPage)
    return (
        <div className="Categories">
            <h2 className="heading">&ensp;Categories: </h2>
            <ul className="link-container">
                {
                    props.mainPage.categories? props.mainPage.categories.map( (el) =>
                            <li key={el.id}>
                                <Link to={`${history.location.search}/category/${el.slug}`}>
                                    <button onClick={ () => {props.getFiltered(el);} }>
                                        &emsp;{el.title}
                                    </button>
                                </Link>
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

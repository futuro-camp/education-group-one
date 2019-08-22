import React, {useEffect} from 'react';
import { Dispatch } from 'redux';
import { connect } from "react-redux";
import mainPage from '../reducers/main-page';
import "../styles/categories.scss";

const Categories: React.FC = (props:any) => {

    useEffect( () => {
    }, []);
    console.log(props.mainPage.content);

    return (
        <div className="Categories">
            <h2 className="heading">Categories: </h2>
            <ul className="link-container">
                {
                    props.mainPage.content? props.mainPage.content.map( (el) =>
                    <li key={el.id}>
                        <a href="#"> {el.title} </a>
                    </li>
                    ) : <li></li>
                }

            </ul>
            <p className="moreCategories"> <a  href="#"> More Categories.. </a> </p>
        </div>
    );
}

const mapStateToProps = (store:any) => { return { mainPage: store.mainPage }; };
const dispatchToProps = (dispatch:any)  => { return { }; };
export default connect (mapStateToProps, dispatchToProps)(Categories);

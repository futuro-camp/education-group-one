import React from "react";
import "./header.css";
import { connect } from "react-redux";
import { changeListTitle } from "../actions";

const Header = (props) => {
    let {title, completed, total} = props;
    console.log(completed);

    return (
        <div className="title">
            <input className="titleName"
                    type="text" defaultValue={title} align="bottom"/>
            <p>Completed<span> {completed} </span> / Total {total}<span></span></p>
        </div>
    );
};
//Implemented states-data (which is a storage) to Component's props
const mapStateToProps = (state) => ({
    title: state.title, completed:state.completed, total:state.total
});
  //Implemented states-functions (which is action ) to Component's props
const dispatchToProps = (dispatch) => ({

});
  //Connecting these to the Card-Component and export this Component
export default connect(mapStateToProps, null)(Header);
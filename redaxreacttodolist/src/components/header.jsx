import React from "react";
import "./header.css";
import { connect } from "react-redux";
import { changeListTitle } from "../actions";
const Header = (props) => {
    const {title, completed, total, changeListTitle} = props;
    return (
        <div className="title">
            <input className="titleName"
                    type="text"
                    onChange={(e) => changeListTitle(e.target.value)}
                    value={title}
                    placeholder="Default List"
                    align="bottom"/>
            <p>Completed<span> {completed} </span> / Total <span>{total}</span></p>
        </div>
    );
};
//Implemented states-data (which is a storage) to Component's props
const mapStateToProps = (state) => ({
  title: state.title, completed:state.completed, total:state.total
});
  //Implemented states-functions (which is action ) to Component's props
const dispatchToProps = (dispatch) => ({
  changeListTitle: (newTitle) => dispatch(changeListTitle({newTitle}))
});
  //Connecting these to the Card-Component and export this Component
export default connect(mapStateToProps, dispatchToProps)(Header);

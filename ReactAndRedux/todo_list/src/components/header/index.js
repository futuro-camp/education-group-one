import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { actionType, readInput } from "../redux/actions";

function Header(props) {
    let {complited, total, title, onChange} = props;
    return(
        <div className="headerDiv">
            <input type="text" name={actionType.CHANGE_TITLE} onChange={onChange} placeholder="Name" value={title}/>
            <p>{complited}/{total}</p>
        </div>
    );
}

const storeToProps = (store) => ({
    complited: store.doneCounter,
    total: store.totalCounter,
    title: store.title
});

const dispatcherToProps = (dispacher) => ({
    onChange: (event) => dispacher(readInput(event))
});

export default connect(storeToProps, dispatcherToProps)(Header);

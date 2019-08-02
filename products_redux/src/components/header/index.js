import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../actions";

const Header = ({logOut}) => (
    <div className="header">
        <button onClick={logOut}>
            Log out
        </button>
    </div>  
);

export default connect(
    null,
    (dispatch) => ({
        logOut: () => { dispatch(logOut()); },
    })
)(Header);

import React from "react";
import { connect } from "react-redux";
import { CHANGE_TITLE, changeInput } from "../../actions";

const Header = ({ onChange, title, doneCounter, totalCounter  }) => (
    <div className="header">
        <input  type="text"
                name={CHANGE_TITLE}
                onChange={(e) => onChange(e)} 
                onKeyUp={(e) => {
                    if(e.key === "Enter"){
                        e.target.blur();
                    }
                }}
                value={title}
                />
        <p>
            <span className="marked">{doneCounter}</span>
            /
            <span className="count">{totalCounter}</span>
        </p>
    </div>
);

export default connect(
    (state) => ({
        title: state.title,
        doneCounter: state.doneCounter,
        totalCounter: state.totalCounter
    }),
    (dispatch) => ({
        onChange: (e) => dispatch(changeInput(e))
    })
)(Header);

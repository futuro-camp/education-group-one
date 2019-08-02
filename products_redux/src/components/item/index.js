import React, { useEffect } from "react";
import { history } from "../../constants";
import { connect } from "react-redux";
import { getItem } from "../../actions";

const Item = ({item, getItem}) => {

    useEffect(() => {
        getItem(history.location.pathname.split("/").pop());
    }, [getItem]);

    return (
        <div className="item">
            <img src="" alt="img"/>
            <p className="name">{item.name}</p>
            <p className="description">{item.description}</p>
        </div>
    );
};

export default connect(
    (state) => ({
        item: state.pageReducer.item
    }),
    (dispatch) => ({
        getItem: (id) => { dispatch(getItem(id)); }
    })
)(Item);

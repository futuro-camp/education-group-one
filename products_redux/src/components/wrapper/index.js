import React from "react";
import { Switch, Route} from "react-router-dom";
import { connect } from "react-redux";
import { pageErrorClear } from "../../actions";
import List from "../list";
import Item from "../item";
import Header from "../header";

 const Wrapper = ({fetch, error, errorClear}) => (
    <div className="wrapper">
        <Header />
        <button     id="errorMsg" 
                    className={error ? "" : "canceled"}
                    onClick={errorClear}>
                {error.toString()}
        </button>
        <div className="content">
            {fetch ? <div className="loaderWrapper"><div className="loader"></div></div> : null}
            <Switch>
                <Route  exact path="/items" component={List} />
                <Route path="/items/" component={Item} />
            </Switch>
        </div> 
        <div className="footer"></div>  
    </div>
);

export default connect(
    ({pageReducer}) => ({
        fetch: pageReducer.fetch,
        error: pageReducer.error
    }),
    (dispatch) => ({
        errorClear: () => { dispatch(pageErrorClear()); }
    })
)(Wrapper);

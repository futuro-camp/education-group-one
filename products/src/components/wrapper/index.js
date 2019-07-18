import React from "react";
import {Switch, Route} from "react-router-dom";
import {List, Item, Head, Footer} from "../index";

export default () => (
    <div className="wrapper">
        <Head />
        <div className="content">
            <Switch>
                <Route  exact path="/items" component={List} />
                <Route path="/items/" component={Item} />
            </Switch>
        </div> 
        <Footer />
    </div>
);

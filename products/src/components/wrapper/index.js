import React from "react";
import {Switch, Route} from "react-router-dom";
import List from "../list";
import Item from "../item";

export default () => (
    <div className="wrapper">
        <div className="header"></div>         
        <div className="content">
            <Switch>
                <Route  exact path="/items" component={List} />
                <Route path="/items/" component={Item} />
            </Switch>
        </div> 
        <div className="footer"></div>  
    </div>
);

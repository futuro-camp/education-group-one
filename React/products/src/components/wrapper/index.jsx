import React from "react";
import Header from "../header";
import Footer from "../footer";
import List from "../list";
import ItemDisplay from "../itemDisplay";
import { Route, Switch } from "react-router-dom";
import "./style.css";

export default function Wrapper() {
    return (            
        <div className="wrapperDiv">
            <Header/>
            <Switch>
                <Route exact path="/items" component={ List }/>
                <Route path="/items/" component={ ItemDisplay }/>
            </Switch>
            <Footer/>
        </div>
    );
}
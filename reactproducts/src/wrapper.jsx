import React from "react";
import "./wrapper.css";
import Login from "./login.jsx";
import Items from "./items.jsx";
import ItemsId from "./itemsId.jsx";
import Header  from "./header.jsx";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const WrongPage = () => <h1>Error 404</h1>

export const Wrapper = ()=> {

    return (
        <div className="wrapper-box">
            <Router>
                <Switch>
                    <Route exact path ="/" component={Login}/>
                    <Route component={({main}) =>
                        <div>
                            <Header />
                            <Switch>
                                <Route exact path = "/items" component = {Items}/>
                                <Route exact path = "/items/id" component = {ItemsId}/>
                                <Route component = {WrongPage}/>
                            </Switch>
                        </div>
                    }/>
                </Switch>
            </Router>
            {/* <Login /> */}
        </div>
    )
}

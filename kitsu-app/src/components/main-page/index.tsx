import React from "react";
import Categories from "./categories";
import Content from "./content";
import { Route, Switch } from "react-router-dom";
import { getAnime, changeCategory } from "../../actions";
import { connect } from "react-redux";
import "../../style/main-page.scss";

const MainPage = () => (
    <div className="main-page">
        <Switch>
            <Route exact path="/app" component={Content} />
            <Route path="/app/categories" component={Content} />
        </Switch>
        <Categories />
    </div>
)

export default connect(

)(MainPage);

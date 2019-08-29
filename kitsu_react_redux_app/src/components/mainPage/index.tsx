import React from "react";
import CategoriesView from "./categories/categoriesView";
import AnimeView from "./animeList/animeListView";
import "../../styles/mainPage/index.scss";

function mainPage(props:any) {
    return (
        <div className="content-view">
            <AnimeView match={props.match}/>
            <CategoriesView/>
        </div>
    );
};

export default mainPage;
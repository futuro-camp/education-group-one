import React from "react";
import Categories from "./categories";
import Content from "./content";
import { connect } from "react-redux";
import "../../style/main-page.scss";

const MainPage = () => (
    <div className="main-page">
        <Content />
        <Categories />
    </div>
)

export default connect(

)(MainPage);

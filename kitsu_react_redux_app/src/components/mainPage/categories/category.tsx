import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/mainPage/categories/category.scss";

interface ICategoryProps {
    name: string;
    description: string;
    slug: string;
}

function category(props: ICategoryProps) {
    let { name, description, slug } = props;
    return (
        <li className="category">
            <Link to={`/list/${slug}/0`}>{name}</Link>
            {description? <div className="description">{description}</div> : null}
        </li>
    );
};

export default category;
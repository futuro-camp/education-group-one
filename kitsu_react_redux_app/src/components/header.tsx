import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.scss";

export default function header(props: any) {
    return (
        <div className="header">
            <Link to="/">Home</Link>
        </div>
    );
}
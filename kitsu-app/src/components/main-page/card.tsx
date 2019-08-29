import React from "react";
import { Link } from "react-router-dom";

export default (props: any) => (
    <li key={props.id}>
        <Link to={{
            pathname: "/anime",
            search: props.id
        }}>
            <img src={props.image ? props.image.large : "https://www.qoo10.sg/gmkt.inc/Img/noImage.png"} alt="" />
            <div className="hiddenInfo">
                <p className="title">{props.title}</p>
                {props.episodeCount ? <p><b>Episodes:</b>{props.episodeCount}</p>  : null}
                {props.episodeLength ? <p><b>Episode length:</b> {props.episodeLength}</p>  : null}
                {props.startDate ? <p><b>Start year:</b> {props.startDate}</p>  : null}
                {props.description ? <p className="description"><b>Description:</b> {props.description}</p>  : null}
            </div>
        </Link>
    </li>
);

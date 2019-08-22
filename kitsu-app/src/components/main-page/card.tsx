import React from "react";

export default (props: any) => (
    <li key={props.id}>
        <img src={props.image.large} alt="" />
        <div className="hiddenInfo">
            <p className="title">{props.title}</p>
            <p><b>Episodes:</b> {props.episodeCount}</p>
            <p><b>Episode length:</b> {props.episodeLength}</p>
            <p><b>Start year:</b> {props.startDate}</p>
            <p className="description"><b>Description:</b> {props.description}</p>
        </div>
    </li>
);

import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/mainPage/animeList/animeCard.scss";

interface IAnimeCardProps {
    title: string;
    posterImage: any;
    rank: number;
    rating: number;
    synopsis: string;
    id: number;
}

function animeCard(props: IAnimeCardProps) {
    let { id, title, posterImage, rank, rating, synopsis } = props;
    return (
        <li className="anime-card">
            <div className="title">
                <h1 className="text">{title}</h1>
            </div>
            <Link to={`/anime/details/${id}`}>
                { posterImage.medium ? <img className="posterImage" src={posterImage.medium} alt={`${title} poster`}/> : null }
            </Link>
            <div className="description">
                <h1 className="rank"><span role="img">📈</span> {rank}</h1>
                <h1 className="rating"><span role="img">❤</span> {rating}</h1>
                <p className="text">{synopsis}</p>
            </div>
        </li>
    );
}

export default animeCard;

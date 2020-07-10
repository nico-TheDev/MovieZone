import React from "react";
import { Link } from "react-router-dom";

export default function SearchCard({ movie }) {
    const formatTitle = (text) => {
        console.log(text)
        return text;
    };
    return (
        <Link to={`/movie/${movie.id}`} className="search-card">
            <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt='poster'
                className="search-card__poster"
            />
            <h4 className="search-card__title">
                {formatTitle(movie.title ? movie.title : movie.original_title)}
            </h4>

            <span className="search-card__year">
                {movie.release_date ? movie.release_date.slice(0, 4) : ""}
            </span>
        </Link>
    );
}

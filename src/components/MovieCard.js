import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, index,counter }) {

    const movement = {
        left: `${index * 13}rem`,
        transform: counter !== 0 ? `translateX(-${counter * 13}rem)` : 'initial'
    }

    return (
        <Link to={`/movie/${movie.id}`}>
            <figure className="movie-card" style={movement}>
                <img
                    className="movie-card__poster"
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt=""
                />

                <div className="movie-card__content">
                    <h3 className="movie-card__title">
                        {movie.name ? movie.name : movie.original_title}
                    </h3>
                    <p className="movie-card__rating">
                        <svg className="icon movie-card__star">
                            <use href="./assets/icons/icons.svg#icon-star-full"></use>
                        </svg>
                        {String(movie.vote_average).length === 1 ? movie.vote_average + '.0' : movie.vote_average}
                    </p>
                </div>
            </figure>
        </Link>
    );
}

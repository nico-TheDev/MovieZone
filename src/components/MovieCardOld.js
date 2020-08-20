import React from "react";
import { Link } from "react-router-dom";
import icons from "../assets/icons/icons.svg";

export default function MovieCardOld({ movie, index, counter }) {
    //check if it's a slider item or a normal card
    const movement =
        counter >= 0
            ? {
                  position: "absolute",
                  left: `${index * 13}rem`,
                  transform:
                      counter !== 0
                          ? `translateX(-${counter * 13}rem)`
                          : "initial",
              }
            : {
                  position: "relative",
              };

    const posterStyle = {
        width: counter >= 0 ? "12rem" : "100%",
        height: counter >= 0 ? "18rem" : "100%",
    };

    const posterImg = movie.poster_path ? (
        <img
            className="movie-card__poster"
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={
                movie.name
                    ? movie.name + " poster"
                    : movie.original_title + " poster"
            }
            style={posterStyle}
        />
    ) : (
        <div className="movie-card__placeholder">No Poster Available</div>
    );

    const cardDate = () => {
        let date;
        if (movie.release_date) {
            date = `(${movie.release_date.slice(0, 4)})`;
        } else if (movie.first_air_date) {
            date = `(${movie.first_air_date.slice(0, 4)})`;
        } else {
            date = "Unknown";
        }

        return date;
    };

    const cardRating =
        String(movie.vote_average).length === 1
            ? movie.vote_average + ".0"
            : movie.vote_average;

    return (
        <Link to={`/movie/${movie.id}`}>
            <figure className="movie-card" style={movement}>
                {posterImg}
                <div className="movie-card__content">
                    <h3 className="movie-card__title">
                        {movie.name ? movie.name : movie.original_title}
                    </h3>
                    <p className="movie-card__date">{cardDate()}</p>
                    <p className="movie-card__rating">
                        <svg className="icon movie-card__star">
                            <use href={`${icons}#icon-star-full`}></use>
                        </svg>
                        {cardRating}
                    </p>
                </div>
            </figure>
        </Link>
    );
}

import React from "react";
import icons from "../assets/icons/icons.svg";
import GenrePill from "../components/GenrePill";


export default function MovieProfile({ details ,setOpenTrailer}) {
    

    document.title = details.title ? 'MovieZone -' + details.title : 'MovieZone -' + details.original_title;

    return (
        details ?
        <header className="movieProfile">
            <img
                src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                alt="backdrop"
                className="movieProfile__backdrop"
            />
            <div className="container">
                <img
                    src={`https://image.tmdb.org/t/p/w300/${details.poster_path}`}
                    alt="poster"
                    className="movieProfile__poster"
                />
                <div className="movieProfile__content">
                    <h2 className="movieProfile__title">
                        {details.title ? details.title : details.original_title}
                    </h2>
                    <ul className="movieProfile__genres">
                        {details.genres &&
                            details.genres.map((genre) => (
                                <GenrePill key={genre.id} genre={genre.name} id={genre.id} />
                            ))}
                    </ul>
                    <ul className="movieProfile__stats">
                        <li className="movieProfile__stat">
                            <svg className="icon">
                                <use href={icons + "#icon-star-full"}></use>
                            </svg>
                            Popularity:{" "}
                            <span>
                                {String(details.vote_average).length === 1
                                    ? details.vote_average + ".0"
                                    : details.vote_average}
                            </span>
                        </li>
                        <li className="movieProfile__stat">
                            <svg className="icon">
                                <use href={icons + "#icon-calendar"}></use>
                            </svg>
                            Release Date: <span>{details.release_date}</span>
                        </li>
                        <li className="movieProfile__stat">
                            <svg className="icon">
                                <use href={icons + "#icon-timer"}></use>
                            </svg>
                            Run Time:{" "}
                            <span>
                                {getRuntime(details.runtime)}
                            </span>
                        </li>
                    </ul>
                    <p className="movieProfile__summary">
                        {details.overview ? details.overview : "No Description"}
                    </p>

                    <button className="btn movieProfile__btn" onClick={() => setOpenTrailer(true)}>
                        <svg className="icon">
                            <use href={icons + "#icon-play"}></use>
                        </svg>
                        Watch Trailer
                    </button>
                </div>
            </div>
        </header>
        : 'Failed to load data'
    );
}

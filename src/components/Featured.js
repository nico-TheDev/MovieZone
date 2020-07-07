import React, { useState, useEffect } from "react";
import GenrePill from "./GenrePill";

import { Link } from "react-router-dom";

export default function Featured() {
    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const [featured, setFeatured] = useState({});
    const [movieGenres, setMovieGenres] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const [featuredResponse, genreResponse] = await Promise.all([
                fetch(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
                ),
                fetch(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
                ),
            ]);
            const [featuredData, genreData] = await Promise.all([
                featuredResponse.json(),
                genreResponse.json(),
            ]);

            setFeatured(
                featuredData.results[
                    Math.floor(Math.random() * featuredData.results.length)
                ]
            );
            setMovieGenres(genreData.genres);
        }

        fetchData();
    }, []);

    const genreList = featured.genre_ids && featured.genre_ids.map(id => {
        let genreName ;
        movieGenres.forEach(item => {
            if(item.id === id){
                genreName = item.name;
            }
        })
        return <GenrePill genre={genreName}/>
    })

    return (
        <div className="featured">
            <div className="featured__backdrop-wrapper">
                <img
                    src={`https://image.tmdb.org/t/p/original/${featured.backdrop_path}`}
                    alt={featured.original_title + "photo"}
                    className="featured__backdrop"
                />
            </div>
            <div className="container">
                <div className="featured__content">
                    <h2 className="featured__title mb-1">
                        {featured.original_title}
                    </h2>
                    <p className="featured__desc mb-1">{featured.overview}</p>
                    <ul className="featured__genres mb-2">
                        {genreList}
                    </ul>
                    <button className="featured__btn text-center btn">
                        <svg className="icon">
                            <use href="./assets/icons/icons.svg#icon-play"></use>
                        </svg>
                        Watch Trailer
                    </button>
                </div>

                <div className="featured__cover">
                    <Link to={`/movie/${featured.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200/${featured.poster_path}`}
                            alt={featured.original_title + "poster"}
                            className="featured__poster"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

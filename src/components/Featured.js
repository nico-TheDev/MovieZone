import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GenrePill from "./GenrePill";
import Trailer from "./Trailer";

export default function Featured({ setLoading }) {
    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const [featured, setFeatured] = useState({});
    const [movieGenres, setMovieGenres] = useState([]);
    const [openTrailer, setOpenTrailer] = useState(true);

    useEffect(() => {
        setOpenTrailer(false);
        async function fetchData() {
            const [featuredResponse, genreResponse] = await Promise.all([
                fetch(
                    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${Math.floor(
                        Math.random() * 4 + 1
                    )}`
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
            setLoading(false);
        }

        fetchData();
    }, []);

    // SET UP THE GENRE PILL
    const genreList =
        featured.genre_ids &&
        featured.genre_ids.map((id) => {
            let genreName, itemId;
            movieGenres.forEach((item) => {
                if (item.id === id) {
                    genreName = item.name;
                    itemId = item.id;
                }
            });
            return (
                <GenrePill
                    key={itemId + String(Math.random() * 2)}
                    genre={genreName}
                    id={itemId}
                />
            );
        });

    return (
        <div className="">
            <Trailer
                id={featured.id}
                open={openTrailer}
                setOpenTrailer={setOpenTrailer}
            />
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
                        <h2 className="featured__title">
                            {`${featured.original_title} (${
                                featured.release_date &&
                                featured.release_date
                                    .split("")
                                    .slice(0, 4)
                                    .join("")
                            })`}
                        </h2>
                        <ul className="featured__genres">{genreList}</ul>
                        <p className="featured__desc mb-1">
                            {featured.overview
                                ? featured.overview
                                : "No summary found"}
                        </p>
                        <button
                            className="featured__btn text-center btn"
                            onClick={() => setOpenTrailer(true)}
                        >
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
        </div>
    );
}

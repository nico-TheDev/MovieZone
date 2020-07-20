import React, { useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import MovieProfile from "../components/MovieProfile";
import CastList from "../components/CastList";
import Recommendations from "../components/Recommendations";
import Loader from "../components/Loader";
import Trailer from "../components/Trailer";

export default function Movie({ match }) {
    const location = useLocation();
    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const { id } = match.params;
    const [movieId, setMovieId] = useState(id);
    const [movieInfo, setMovieInfo] = useState({});
    const [movieRecommendations, setMovieRecommendations] = useState([]);
    const [movieCast, setMovieCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openTrailer, setOpenTrailer] = useState(true);

    // REFRESH CURRENT ROUTE
    useEffect(() => {
        setOpenTrailer(false);
        const updatedMovieId = location.pathname.slice(7);
        setMovieId(updatedMovieId);
        setLoading(true);
        async function fetchMovie() {
            try {
                const [
                    movieInfoResponse,
                    movieRecommendationResponse,
                    movieCastResponse,
                ] = await Promise.all([
                    fetch(
                        `https://api.themoviedb.org/3/movie/${movieId}}?api_key=${apiKey}&language=en-US`
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`
                    ),
                    fetch(
                        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
                    ),
                ]);
                const [
                    movieInfoData,
                    movieRecommendationData,
                    movieCastData,
                ] = await Promise.all([
                    movieInfoResponse.json(),
                    movieRecommendationResponse.json(),
                    movieCastResponse.json(),
                ]);

                setMovieInfo(movieInfoData);
                setMovieRecommendations(
                    movieRecommendationData.results.slice(0, 10)
                );
                setMovieCast(movieCastData.cast.slice(0, 10));
            } catch (err) {
                setMovieInfo(null);
                setMovieRecommendations(null);
                setMovieCast(null);
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [location, movieId]);

    if (!movieId) {
        return null;
    }

    return (
        movieId && (
            <div className="movieComp">
                <Trailer
                    id={movieId}
                    open={openTrailer}
                    setOpenTrailer={setOpenTrailer}
                />
                <Loader loading={loading} />
                <MovieProfile details={movieInfo} setOpenTrailer={setOpenTrailer}/>
                <CastList casts={movieCast} />
                <Recommendations movies={movieRecommendations} />
            </div>
        )
    );
}

import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import MovieProfile from "../components/MovieProfile";
import CastList from "../components/CastList";
import Recommendations from "../components/Recommendations";
import Loader from "../components/Loader";

export default function Movie({ match }) {
    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const [movieId, setMovieId] = useState(match.params.id);
    const [movieInfo, setMovieInfo] = useState({});
    const [movieRecommendations, setMovieRecommendations] = useState([]);
    const [movieCast, setMovieCast] = useState([]);
    const [loading, setLoading] = useState(true);


    // REFRESH CURRENT ROUTE
    useEffect(() => {
        async function fetchMovie() {
            setLoading(true);
            setMovieId(match.params.id);
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
                setMovieRecommendations(movieRecommendationData.results.slice(0,10));
                setMovieCast(movieCastData.cast.slice(0,10));
                setLoading(false);
            } catch (err) {
                setMovieInfo(null);
                setMovieRecommendations(null);
                setMovieCast(null);
                setLoading(false);
                console.log(err);
            }
        }

        fetchMovie();
    }, [match.params.id,match.url]);


    

    console.log(match.params.id);
    return movieId && (
        <div className='movieComp'>
            <Loader loading={loading} />
            <Nav position={"absolute"} />
            <MovieProfile details={movieInfo} />
            <CastList casts={movieCast}/>
            <Recommendations movies={movieRecommendations} />
            <Footer />
        </div>
    );
}

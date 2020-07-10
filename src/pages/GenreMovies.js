import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Loader from "../components/Loader";
import Pagination from '../components/Pagination';

export default function Collection({ match }) {
    document.title = `MovieZone - ${match.params.genre} Movies`;

    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const { id } = match.params;
    const [genreId, setGenreId] = useState(id);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);
    
    console.log(match);

    useEffect(() => {
        setLoading(true);
        setGenreId(id);
        async function fetchGenres() {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${currentPage}`
            );

            const data = await response.json();
            setMovies(data.results);
            setLoading(false);
        }

        fetchGenres();
    }, [currentPage]);

    return (
        <>
            <Loader loading={loading}/>
            <Nav position={"relative"} />
            <div className="mb-1"></div>
            <div className="collection">
    <h2 className="collection__title mb-1 text-center">{`${match.params.genre} Movies`}</h2>
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
            <Pagination setPage={setCurrentPage} pageCount={currentPage}/>
            <Footer />
        </>
    );
}

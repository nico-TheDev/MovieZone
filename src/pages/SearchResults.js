import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

export default function Collection({ match }) {
    document.title = `Search Results`;

    const apiKey = `8de0aa83cbd229a4fe1edec663d0235d`;
    const [query, setQuery] = useState(match.params.query);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        setQuery(match.params.query);
        async function fetchResults() {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query="${query}"&api_key=${apiKey}&language=en-US&page=${currentPage}&include_adult=false`
            );

            const data = await response.json();
            setMovies(data.results);
            setLoading(false);
        }

        fetchResults();
    }, [currentPage, query]);

    return (
        <>
            <Loader loading={loading} />
            <Nav position={"relative"} />
            <div className="mb-1"></div>
            <div className="collection">
                <h2 className="collection__title mb-1 text-center">{`Search Results for: ${query}`}</h2>
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
            <Pagination setPage={setCurrentPage} pageCount={currentPage} />
            <Footer />
        </>
    );
}

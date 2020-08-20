import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

export default function Collection({ match }) {
    document.title = `Search Results`;
    const location = useLocation();
    const [query, setQuery] = useState(match.params.query);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        const newQuery = location.pathname.slice(8);
        setQuery(newQuery);
        async function fetchResults() {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query="${query}"&api_key=${process.env.REACT_APP_KEY}&language=en-US&page=${currentPage}&include_adult=false`
            );

            const data = await response.json();
            setMovies(data.results);
            setLoading(false);
        }

        fetchResults();
    }, [currentPage, query, location]);

    const resultList = () => {
        let result;
        if (movies.length !== 0) {
            result = movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ));
        } else {
            result = <h2 className="noResult">No Movies Found</h2>;
        }

        return result;
    };

    return (
        <>
            <Loader loading={loading} />
            <div className="mb-1"></div>
            <div className="collection">
                <h2 className="collection__title mb-1 text-center">{`Search Results for: ${query}`}</h2>
                <div className="container">{resultList()}</div>
            </div>
            <Pagination
                setPage={setCurrentPage}
                pageCount={movies.length !== 0 ? currentPage : 0}
            />
        </>
    );
}

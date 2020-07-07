import React from "react";
import MovieCard from "../components/MovieCard";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import Pagination from "../components/Pagination";

export default function Collection({ movies, title ,setPage, pageCount}) {
    return (
        <>
            <Nav position={"relative"} />
            <div className="mb-1"></div>
            <div className="collection">
                <h2 className="collection__title mb-1 text-center">{title}</h2>
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
            <Pagination setPage={setPage} pageCount={pageCount}/>
            <Footer />
        </>
    );
}

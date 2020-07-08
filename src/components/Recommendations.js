import React from "react";
import MovieCard from "../components/MovieCard";

export default function Recommendations({ movies }) {
    return ( movies.length !== 0 ?
        <div className="recommendations">
            <h2 className="recommendations__title text-center mb-2">More Like This</h2>
            <div className="container">
                {movies ? movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                )) : 'No Movies '}
            </div>
        </div> : 

        <div className="text-center" style={{fontSize:'3rem',padding:'2rem'}}>No Movies Found </div>
    );
}

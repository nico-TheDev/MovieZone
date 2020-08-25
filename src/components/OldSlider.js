import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function Slider({ title, movies }) {
    const [counter, setCounter] = useState(0);

    const moveRight = () => {
        setCounter((prevCounter) => (prevCounter += 1));
    };

    const moveLeft = () => {
        setCounter((prevCounter) => (prevCounter -= 1));
    };

    return (
        <div className="slider">
            <button
                className="slider__prev slider__btn"
                onClick={moveLeft}
                style={{ display: counter !== 0 ? "inline-block" : "none" }}
            >
                <svg className="icon">
                    <use href="./assets/icons/icons.svg#icon-arrow-left"></use>
                </svg>
            </button>
            <button
                className="slider__next slider__btn"
                onClick={moveRight}
                style={{ display: counter < 15 ? "inline-block" : "none" }}
            >
                <svg className="icon">
                    <use href="./assets/icons/icons.svg#icon-arrow-right"></use>
                </svg>
            </button>
            <div className="container">
                <h2 className="slider__name mb-1">
                    {title}
                </h2>
                <div className="slider__body">
                    {movies.map((movie, index) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            index={index}
                            counter={counter}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { Link } from "react-router-dom";

import { Poster, Card, Date, Rating, StarIcon, Title } from "./styles";

export default function MovieCard({ movie }) {
    const cardDate = (date) => (date ? String(date).slice(0, 4) : "unknown");

    return (
        <Link to={`/movie/${movie.id}`}>
            <Card>
                {movie.poster_path && (
                    <Poster
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.name || movie.original_title}
                    />
                )}
                <Content>
                    <Title> {movie.name || movie.original_title}</Title>
                    <Date>
                        {cardDate(movie.release_date || movie.first_air_date)}
                    </Date>
                    <Rating>
                        <StarIcon />
                        {String(movie.vote_average).length === 1
                            ? movie.vote_average + ".0"
                            : movie.vote_average}
                    </Rating>
                </Content>
            </Card>
        </Link>
    );
}

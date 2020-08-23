import React from "react";

import useRecommendations from "../../hooks/useRecommendations";
import MovieCard from "../MovieCard";
import {
    RecommendationsMain,
    RecommendationsContainer as Container,
    Title,
} from "./styles";

export default function Recommendations({ id, type }) {
    const { data, isLoading, isError } = useRecommendations(id, type);

    if (isLoading) return "Loading Recommendations...";

    if (isError) return "Error Recommendations";

    return (
        <RecommendationsMain>
            <Title>More Like This</Title>
            <Container>
                {data.results.length !== 0 &&
                    data.results
                        .slice(0, 12)
                        .map((movie) => (
                            <MovieCard key={movie} movie={movie} type={type} />
                        ))}
            </Container>
        </RecommendationsMain>
    );
}

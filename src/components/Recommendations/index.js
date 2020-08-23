import React from "react";

import useRecommendations from "../../hooks/useRecommendations";
import MovieCard from "../MovieCard";
import {
    RecommendationsMain,
    RecommendationsContainer as Container,
    Title,
    Placeholder,
} from "./styles";

export default function Recommendations({ id, type }) {
    const { data, isLoading, isError } = useRecommendations(id, type);

    if (isLoading) return "Loading Recommendations...";

    if (isError) return "Error Recommendations";

    return (
        <RecommendationsMain>
            <Title>
                {data.results.length !== 0
                    ? "More Like This"
                    : "No Movie Recommendations"}
            </Title>
            {data.results.length !== 0 && (
                <Container>
                    {data.results.slice(0, 12).map((movie) => (
                        <MovieCard key={movie} movie={movie} type={type} />
                    ))}
                </Container>
            )}
        </RecommendationsMain>
    );
}

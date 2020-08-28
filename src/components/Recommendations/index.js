import React from "react";

import useRecommendations from "../../hooks/useRecommendations";
import MovieCard from "../MovieCard";
import {
    RecommendationsMain,
    RecommendationsContainer as Container,
    Title,
} from "./styles";
import RecommendationSkeleton from "./RecommendationSkeleton";

export default function Recommendations({ id, type }) {
    const { data, isLoading, hasError } = useRecommendations(id, type);

    if (isLoading) return <RecommendationSkeleton />;

    if (hasError) return "Error Recommendations";

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
                        <MovieCard key={movie.id} movie={movie} type={type} />
                    ))}
                </Container>
            )}
        </RecommendationsMain>
    );
}

import React from "react";
import { useHistory } from "react-router-dom";

import useRecommendations from "../../hooks/useRecommendations";
import MovieCard from "../MovieCard";
import {
    RecommendationsMain,
    RecommendationsContainer as Container,
    Title,
} from "./styles";
import RecommendationSkeleton from "./RecommendationSkeleton";
import EmptyRecommendation from "../EmptyPlaceholder";

export default function Recommendations({ id, type }) {
    const history = useHistory();
    const { data, isLoading, hasError } = useRecommendations(id, type);

    if (isLoading) return <RecommendationSkeleton />;

    if (hasError) {
        history.push("/error");
        return;
    }

    return (
        <RecommendationsMain length={data.results.length}>
            <Title>More Like This</Title>
            {data.results.length !== 0 ? (
                <Container>
                    {data.results.slice(0, 12).map((movie) => (
                        <MovieCard key={movie.id} movie={movie} type={type} />
                    ))}
                </Container>
            ) : (
                <EmptyRecommendation title="No Movie Recommendations" />
            )}
        </RecommendationsMain>
    );
}

import React from "react";

import MovieCard from "components/MovieCard";
import {
    RecommendationsMain,
    RecommendationsContainer as Container,
    Title,
} from "./styles";
import EmptyRecommendation from "components/EmptyPlaceholder";

export default function Recommendations({results,type}) {

    return (
        <RecommendationsMain length={results.length}>
            <Title>More Like This</Title>
            {results.length ? (
                <Container>
                    {results.slice(0, 12).map((item) => (
                        <MovieCard key={item.id} movie={item} type={type} />
                    ))}
                </Container>
            ) : (
                <EmptyRecommendation title="No Movie Recommendations" />
            )}
        </RecommendationsMain>
    );
}

import React from "react";
import { useHistory } from "react-router-dom";

import useReviews from "../../hooks/useReviews";
import ReviewCard from "./ReviewCard";
import Container from "../shared/Container";
import { ReviewWrapper, Title } from "./styles";
import ReviewSkeleton from "./ReviewSkeleton";
import EmptyReview from "../EmptyPlaceholder";

export default function Reviews({ id, type }) {
    const history = useHistory();
    const { data, isLoading, hasError } = useReviews(id, type);

    if (isLoading) return <ReviewSkeleton />;

    if (hasError) {
        history.push("/error");
        return;
    }

    return (
        <Container>
            <ReviewWrapper>
                <Title>Reviews</Title>
                {data.results.length !== 0 ? (
                    data.results
                        .slice(0, 5)
                        .map((comment) => (
                            <ReviewCard details={comment} key={comment.id} />
                        ))
                ) : (
                    <EmptyReview title="No Reviews" />
                )}
            </ReviewWrapper>
        </Container>
    );
}

import React from "react";

import useReviews from "../../hooks/useReviews";
import ReviewCard from "./ReviewCard";
import Container from "../shared/Container";
import { ReviewWrapper, Title } from "./styles";
import ReviewSkeleton from "./ReviewSkeleton";

export default function Reviews({ id, type }) {
    const { data, isLoading, hasError } = useReviews(id, type);

    if (isLoading) return <ReviewSkeleton />;

    if (hasError) return "Something went wrong";

    return (
        <Container>
            <ReviewWrapper>
                <Title>Reviews</Title>
                {data.results.slice(0, 5).map((comment) => (
                    <ReviewCard details={comment} key={comment.id} />
                ))}
            </ReviewWrapper>
        </Container>
    );
}

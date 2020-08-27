import React from "react";

import useReviews from "../../hooks/useReviews";
import ReviewCard from "./ReviewCard";
import Container from '../shared/Container';
import { ReviewWrapper, Title } from "./styles";

export default function Reviews({ id, type }) {
    const { data, isLoading, isError } = useReviews(id, type);

    if (isLoading) return "Review Loading";

    if (isError) return "Something went wrong";

    return (
        <Container>
            <ReviewWrapper>
                <Title>Reviews</Title>
                {data.results.slice(0,5).map((comment) => (
                    <ReviewCard details={comment} key={comment.id} />
                ))}
            </ReviewWrapper>
        </Container>
    );
}

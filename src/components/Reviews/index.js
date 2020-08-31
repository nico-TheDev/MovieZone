import React from "react";
import { useHistory } from "react-router-dom";

import useReviews from "hooks/useReviews";
import ReviewCard from "./ReviewCard";
import Container from "components/shared/Container";
import { ReviewWrapper, Title } from "./styles";
import ReviewSkeleton from "./ReviewSkeleton";
import EmptyReview from "components/EmptyPlaceholder";
import ErrorPage from 'components/pages/NotFoundPage';


export default function Reviews({ id, type }) {
    const history = useHistory();
    const { data, isLoading, hasError } = useReviews(id, type);

    if (isLoading) return <ReviewSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
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

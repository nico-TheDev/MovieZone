import React, { useState } from "react";
import {
    RatingWrapper,
    RatingForm,
    Rater,
    RaterLabel,
    RateIcon,
} from "./styles";
import getIcon from "util/getIcon";

export default function Rating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const displayStars = (star, index) => {
        const ratingValue = index + 1;

        return (
            <RaterLabel key={index}>
                <Rater
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                />
                <RateIcon
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                >
                    <use
                        href={getIcon(
                            ratingValue <= (hover || rating)
                                ? "star-full"
                                : "star-empty"
                        )}
                    />
                </RateIcon>
            </RaterLabel>
        );
    };

    return (
        <RatingWrapper>
            <RatingForm>{[...Array(5)].map(displayStars)}</RatingForm>
        </RatingWrapper>
    );
}

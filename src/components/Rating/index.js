import React, { useState, useEffect } from "react";
import {
    RatingWrapper,
    RatingForm,
    Rater,
    RaterLabel,
    RateIcon,
    Alert
} from "./styles";
import getIcon from "util/getIcon";
import API from "api/moviedb.instance";
import { useAuth } from "contexts/AuthContext";

export default function Rating({ type, id }) {
    const { state } = useAuth();
    const [rating, setRating] = useState(null);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [hover, setHover] = useState(null);

    useEffect(() => {
        if (state.user && state.userMedia) {
            const ratedList = state.userMedia[
                `rated${type === "tv" ? "TV" : "Movies"}`
            ].results.map((item) => ({ id: item.id, rating: item.rating }));
            ratedList.forEach((item) => {
                if (item.id === id) {
                    setRating(Math.floor(item.rating / 2));
                }
            });
        }
    }, [state.userMedia,state.user]);

    const displayStars = (star, index) => {
        const ratingValue = index + 1;

        const submitRating = (e) => {
            setRating(ratingValue);
            API.post(
                `/${type}/${id}/rating`,
                {
                    value: ratingValue * 2,
                },
                {
                    params: {
                        session_id: state.session.session_id,
                    },
                }
            ).then((res) => {
                setIsDisplayed(true);
                setTimeout(() => setIsDisplayed(false),2000);
            });
        };

        return (
            <RaterLabel key={index}>
                <Rater
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={submitRating}
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
        <>
        <RatingWrapper>
            <RatingForm id="rating-form">
                {[...Array(5)].map(displayStars)}
            </RatingForm>
        </RatingWrapper>
        <Alert isDisplayed={isDisplayed}>Successfully Reviewed!</Alert>
        </>
    );
}

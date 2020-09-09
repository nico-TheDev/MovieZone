import React, { useState, useEffect } from "react";
import {
    RatingWrapper,
    RatingForm,
    Rater,
    RaterLabel,
    RateIcon,
} from "./styles";
import getIcon from "util/getIcon";
import API from "api/moviedb.instance";
import { useAuth } from "contexts/AuthContext";
import Alert from "components/shared/Alert";

export default function Rating({ type, id }) {
    const { state } = useAuth();
    const [rating, setRating] = useState(null);
    const [isDisplayed, setIsDisplayed] = useState({
        display: false,
        message: "",
    });
    const [hover, setHover] = useState(null);

    const displayMessage = (msg) => {
        setIsDisplayed({
            display: true,
            message: msg,
        });
        setTimeout(
            () =>
                setIsDisplayed({
                    display: false,
                    message: "",
                }),
            2000
        );
    };

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
    }, [state.userMedia, state.user,id,type]);

    useEffect(() => {
        if (state.guestSession && state.guestMedia) {
            const key = `rated${type === "tv" ? "TV" : "Movies"}`;
            const ratedList = state.guestMedia[key].results.map((item) => ({
                id: item.id,
                rating: item.rating,
            }));
            ratedList.forEach((item) => {
                if (item.id === id) {
                    setRating(Math.floor(item.rating / 2));
                }
            });
        }
    }, [state.guestMedia, state.guestSession,id,type]);

    const displayStars = (star, index) => {
        const ratingValue = index + 1;

        const submitRating = (e) => {
            if (state.user && state.userMedia) {
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
                ).then((res) => {});
            } else if (state.guestSession) {
                setRating(ratingValue);
                API.post(
                    `/${type}/${id}/rating`,
                    {
                        value: ratingValue * 2,
                    },
                    {
                        params: {
                            guest_session_id:
                                state.guestSession.guest_session_id,
                        },
                    }
                ).then((res) => {
                    displayMessage("Successfully Reviewed!");
                });
            } else {
                displayMessage("Try Signing In");
            }
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
            <Alert
                isDisplayed={isDisplayed.display}
                user={state.user || state.guestSession}
            >
                {isDisplayed.message}
            </Alert>
        </>
    );
}

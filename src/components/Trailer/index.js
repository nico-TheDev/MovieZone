import React from "react";
import { useHistory } from "react-router-dom";

import useMovieTrailers from "../../hooks/useMovieTrailers";
import TrailerSlider from "./TrailerSlider";
import {
    TrailerStyle,
    TrailerContainer,
    TrailerButton,
    CloseIcon,
} from "./styles";
import getIcon from "../../util/getIcon";
import ErrorPage from '../pages/NotFoundPage';

export default function Trailer({ id, isOpen, setIsTrailerOpen, type }) {
    const history = useHistory();
    const { data, isLoading, hasError } = useMovieTrailers(id, type);

    const handleClick = () => setIsTrailerOpen(false);

    if (isLoading) return null;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    return (
        <TrailerStyle isOpen={isOpen}>
            <TrailerContainer>
                {data.results && isOpen ? (
                    <TrailerSlider videos={data.results} />
                ) : (
                    <h2>No Trailer Found</h2>
                )}

                <TrailerButton onClick={handleClick}>
                    <CloseIcon>
                        <use href={getIcon("close-outline")} />
                    </CloseIcon>
                </TrailerButton>
            </TrailerContainer>
        </TrailerStyle>
    );
}

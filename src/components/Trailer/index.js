import React from "react";
import { useParams } from 'react-router-dom';

import useMovieTrailers from "../../hooks/useMovieTrailers";
import {
    TrailerStyle,
    TrailerContainer,
    TrailerButton,
    CloseIcon,
} from "./styles";
import getIcon from "../../util/getIcon";

export default function Trailer({ id, isOpen, setIsTrailerOpen }) {
    const params = useParams();
    const { data, isLoading, isError } = useMovieTrailers(id,params.type);


    const handleClick = () => setIsTrailerOpen(false);

    if (isLoading) return null;

    if (isError) return "Error";

    return (
        <TrailerStyle isOpen={isOpen}>
            <TrailerContainer>
                {(data.results[0] && isOpen) ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${data.results[0].key}`}
                        frameBorder="0"
                    ></iframe>
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

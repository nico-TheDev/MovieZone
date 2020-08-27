import React,{ createContext } from "react";

import MovieProfile from "./MovieProfile";
import CastSlider from "../../CastSlider";
import Reviews from "../../Reviews";
import Recommendations from "../../Recommendations";

export default function Movie({ match }) {
    const { id } = match.params;
    const type = 'movie';

    return (
        <>
            <MovieProfile id={id} />
            <CastSlider id={id} type={type} />
            <Reviews id={id} type={type} />
            <Recommendations id={id} type={type} />
        </>
    );
}

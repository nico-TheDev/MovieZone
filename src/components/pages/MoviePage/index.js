import React from "react";

import MovieProfile from "./MovieProfile";
import CastSlider from "../../CastSlider";
import Reviews from "../../Reviews";
import Recommendations from "../../Recommendations";

const TYPE = "movie";
export default function Movie({ match }) {
    const { id } = match.params;
    return (
        <>
            <MovieProfile id={id} />
            <CastSlider id={id} type={TYPE} />
            <Reviews id={id} type={TYPE} />
            <Recommendations id={id} type={TYPE} />
        </>
    );
}

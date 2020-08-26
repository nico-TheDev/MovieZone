import React from "react";

import MovieProfile from "../../MovieProfile";
import Recommendations from "../../Recommendations";
import CastSlider from "../../CastSlider";
import Reviews from "../../Reviews";

export default function Movie({ match }) {
    const { id, type } = match.params;

    return (
        <>
            <MovieProfile id={id} />
            <CastSlider id={id} type={type} />
            <Reviews id={id} type={type} />
            <Recommendations id={id} type={type} />
        </>
    );
}

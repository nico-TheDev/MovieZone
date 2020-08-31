import React from "react";

import MovieProfile from "./MovieProfile";
import CastSlider from "components/CastSlider";
import Reviews from "components/Reviews";
import Recommendations from "components/Recommendations";

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

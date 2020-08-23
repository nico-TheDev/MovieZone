import React from "react";

import MovieProfile from "../../MovieProfile";
import Recommendations from "../../Recommendations";
import CastSlider from "../../CastSlider";

export default function Movie({ match }) {
    const { id, type } = match.params;

    return (
        <>
            <MovieProfile id={id} />
            <CastSlider id={id} type={type} />
            <Recommendations id={id} type={type} />
        </>
    );
}

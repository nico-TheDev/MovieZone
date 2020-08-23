import React, { useState, useEffect } from "react";
import MovieProfile from "../../MovieProfile";
import Recommendations from "../../Recommendations";

export default function Movie({ match }) {
    const { id, type } = match.params;

    return (
        <>
            <MovieProfile id={id} />
            <Recommendations id={id} type={type} />
        </>
    );
}

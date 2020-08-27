import React from "react";

import usePersonMedia from "../../../hooks/usePersonMedia";
import Container from "../../shared/Container";
import PersonProfile from "../../PersonProfile";
import Slider from '../../Slider';

export default function Person({
    match: {
        params: { id },
    },
}) {
    const { data, isLoading, isError } = usePersonMedia(id);

    if (isLoading) return "Loading person";
    if (isError) return "Error person";

    return (
        <>
            <PersonProfile id={id} bg={data}/>
            <Slider title='Top Films/TV Shows' movies={data.slice(0,10)} />
        </>
    );
}

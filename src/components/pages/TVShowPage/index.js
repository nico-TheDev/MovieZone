import React from "react";

import TVProfile from "./TVProfile";
import CastSlider from "../../CastSlider";
import Seasons from "./Seasons";
import Reviews from "../../Reviews";
import Recommendations from "../../Recommendations";

export default function TVShow({ match }) {
    const { id } = match.params;
    const type = "tv";
    return (
        <>
            <TVProfile id={id} />
            <CastSlider id={id} type={type} />
            <Seasons id={id} />
            <Reviews id={id} type={type} />
            <Recommendations id={id} type={type} />
        </>
    );
}

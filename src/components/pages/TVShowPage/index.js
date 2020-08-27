import React from "react";

import TVProfile from "./TVProfile";
import CastSlider from "../../CastSlider";
import Seasons from "./Seasons";
import Reviews from "../../Reviews";
import Recommendations from "../../Recommendations";

export default function TVShow({ match }) {
    const TYPE = "tv";
    const { id } = match.params;
    return (
        <>
            <TVProfile id={id} />
            <CastSlider id={id} type={TYPE} />
            <Seasons id={id} />
            <Reviews id={id} type={TYPE} />
            <Recommendations id={id} type={TYPE} />
        </>
    );
}

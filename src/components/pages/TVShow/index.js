import React from "react";

import TVProfile from "../../TVProfile";
import Recommendations from "../../Recommendations";
import CastSlider from "../../CastSlider";
import Reviews from "../../Reviews";
import Seasons from "../../Seasons";

export default function TVShow({ match }) {
    const { id } = match.params;
    const type = 'tv';
    return (
        <>
            <TVProfile id={id} />
            <CastSlider id={id} type={type} />
            <Seasons id={id}/>
            <Reviews id={id} type={type} />
            <Recommendations id={id} type={type} />
        </>
    );
}
